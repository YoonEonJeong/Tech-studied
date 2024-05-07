---
sidebar_label: 'Docker Compose의 이해'
sidebar_position: 2
---

# `Docker Compose를 사용하는 이유는?`

먼저 Docker Compose를 사용하지 않고 NodeJS, Redis 컨테이너를 만들어서 컨테이너간 통신을 해보겠습니다. 

<br>

## `NodeJS 환경 세팅`

![스크린샷 2021-04-23 오후 2 59 37](https://user-images.githubusercontent.com/45676906/115825793-e4e6e280-a444-11eb-8879-ae6112905f01.png)

```
npm init
Enter (계속)
```

`npm init` 명령을 치면 어떤 것들이 여러 개 뜨는데 Enter를 계속 치겠습니다.

<br>

![스크린샷 2021-04-23 오후 3 01 20](https://user-images.githubusercontent.com/45676906/115825835-f03a0e00-a444-11eb-9a54-79f14a74ebe1.png)

그러면 위와 같이 `package.json`이 만들어집니다.

<br>

![스크린샷 2021-04-23 오후 3 07 29](https://user-images.githubusercontent.com/45676906/115826336-aef62e00-a445-11eb-990c-1e519fdfd8cb.png)

```json
{
  "name": "compose",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "express": "4.17.1",
    "redis": "3.0.2"
  },
  "author": "",
  "license": "ISC"
}
```

위와 같이 서버를 실행할 때 사용하기 위해서 scripts에 `start`와 `Express, Redis` 의존성을 추가하겠습니다. 그리고 `server.js` 파일을 하나 만든 후에 아래와 같이 작성해주겠습니다. 

```js
const express = require('express');
const redis = require('redis');

const client = redis.createClient({
  host: "redis-server",
  port: 6379
});

const app = express();

// 숫자는 0부터 시작

client.set("number", 0);

app.get('/', (req, res) => {
  client.get("number", (err, number) => {
    client.set("number", parseInt(number) + 1);
    res.send("숫자가 1씩 증가합니다." + number);
  })
})

app.listen(8080);        // 원하는 포트 지정

console.log('Server is Running !!');
``` 

해당 API 요청이 들어올 때마다 Redis를 이용하여 숫자가 1씩 증가하는 것을 화면으로 Response를 주는 간단한 코드입니다. 이제 테스트를 해보기 위해서 `Dockerfile` 부터 작성해보겠습니다. 

<br>

## `Dockerfile 작성`

```dockerfile
FROM node:10

WORKDIR /usr/src/app

COPY ./ ./

RUN npm install

CMD ["node", "server.js"]
``` 

- `FROM`: node:10을 베이스 이미지로 사용합니다.
- `WORKDIR`: 컨테이너 안에서 /usr/src/app 의 경로를 지정합니다.
- `COPY`: 현재 위치에 있는 파일들을 컨테이너에 복사합니다.
- `RUN`: 컨테이너 안에서 npm install을 해줍니다.
- `CMD`: script에서 설정해준 것처럼 `node server.js`로 서버를 실행합니다.

<br> <br>

## `Docker Containers간 통신할 때 나타나는 에러`

위의 코드를 실행하기 위해서는 NodeJS 컨테이너와 Redis 컨테이너가 필요합니다. 먼저 NodeJS를 실행하기 위해서는 Redis 서버가 실행되어야 합니다.

<img width="779" alt="스크린샷 2021-04-23 오후 3 18 59" src="https://user-images.githubusercontent.com/45676906/115827421-3b552080-a447-11eb-9dad-08a673d14ca6.png">

먼저 Redis 서버를 실행시키겠습니다.

<br>

![스크린샷 2021-04-23 오후 3 20 41](https://user-images.githubusercontent.com/45676906/115827645-8b33e780-a447-11eb-9c51-56169a9f06a0.png)

```
docker run redis
```

위의 명령어를 통해서 Redis 서버를 실행시켰습니다. 이번에는 다른 터미널에서 위에서 만든 Dockerfile을 가지고 이미지를 만들겠습니다.

<br>

![스크린샷 2021-04-23 오후 3 24 27](https://user-images.githubusercontent.com/45676906/115828005-101f0100-a448-11eb-937d-9abe46481615.png)

```
docker build -t 이미지이름 ./
ex) docker build -t gyunny ./
```

Dockerfile이 존재하는 같은 위치에서 위의 명령어를 치면 images를 만들게 됩니다.

<br>

![스크린샷 2021-04-23 오후 3 25 05](https://user-images.githubusercontent.com/45676906/115828144-42c8f980-a448-11eb-9baa-25e02347d3fa.png)

그러면 위와 같이 `이미지`가 만들어진 것도 확인할 수 있습니다. 

<br>

![스크린샷 2021-04-23 오후 3 28 22](https://user-images.githubusercontent.com/45676906/115828404-a3f0cd00-a448-11eb-840d-8631cf94d266.png)

```
docker run 이미지이름
ex) docker run gyunny
```

위와 같이 실행하면 에러가 발생하는 것을 볼 수 있습니다.

<br>

### `에러가 발생하는 이유가 무엇일까요?`

<img width="788" alt="스크린샷 2021-04-23 오후 3 29 58" src="https://user-images.githubusercontent.com/45676906/115828520-c387f580-a448-11eb-9847-7ec5acc9b904.png">

에러를 읽어보면 `Redis 연결이 실패`했다고 나옵니다. 이유는 원래 컨테이너간 통신을 할 때 아무런 설정을 해주지 않으면 접근이 가능하지 않기 때문에 에러가 발생하는 것입니다. 

<br>

### `어떻게 컨테이너 사이에 통신을 할 수 있게 할까요?`

CLI 명령어에서 --link와 같은 것들을 이용할 수도 있겠지만, 이러한 `멀티 컨테이너 상황에서 쉽게 네트워크를 연결시켜주기 위해서는 Docker Compose`를 이용하는 것이 좋습니다.

<br>
```
다음 페이지에서 계속
```