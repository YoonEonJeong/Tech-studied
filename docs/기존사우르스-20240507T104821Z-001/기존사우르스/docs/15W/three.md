---
sidebar_label: 'Docker Compose의 이해2'
sidebar_position: 3
---
```
지난 페이지에 이어 계속해보겠습니다.
```

### `Docker Compose 파일 작성하기`

```
docker-compose.yml 이라는 이름의 파일을 만들겠습니다.
```

![스크린샷 2021-04-23 오후 3 33 27](https://user-images.githubusercontent.com/45676906/115828899-414c0100-a449-11eb-9267-4055e7a64f1d.png)

현재 폴더의 구조는 위와 같습니다. 바로 `docker-compose.yml` 파일을 작성해보겠습니다.

<br>

```yaml
version: "3"              # 도커 컴포즈의 버전
services:                 # 이곳에 실행하려는 컨테이너들을 정의
  redis-server:           # 컨테이너 이름을 지정 (원하는 이름)
    image: "redis"        # 사용할 이미지 이름
  gyunny:                 # 컨테이너 이름을 지정 (원하는 이름)
    build: ""              # 현 디렉토리에 있는 Dockerfile을 사용하여 빌드
    ports:
      - "5000:8080"       # 로컬포트:컨테이너포트 (서로 매핑)
```

위와 같이 컴포즈 파일을 작성하겠습니다.

<br>

![스크린샷 2021-04-23 오후 3 38 11](https://user-images.githubusercontent.com/45676906/115830784-bfa9a280-a44b-11eb-9556-e259a8250295.png)

```
docker-compose up         (이미지가 없을 때 이미지를 빌드하고 컨테이너 시작)
docker-compose up --build (이미지가 있든 없든 다시 빌드하고 실행)
docker-compose down       (컴포즈 중지하기)
```

위의 명령어를 통해서 실행하면 위와 같이 에러 없이 서버가 실행되는 것을 볼 수 있습니다. 

<br>

![스크린샷 2021-04-23 오후 3 53 21](https://user-images.githubusercontent.com/45676906/115831097-1ca55880-a44c-11eb-84e8-6b68e2a0661c.png)

그리고 현재 실행 중인 컨테이너 목록을 보면 위와 같이 `Redis`, `Node.JS` 두 개의 컨테이너가 실행되고 있는 것을 볼 수 있습니다.

<br>

![스크린샷 2021-04-23 오후 3 55 13](https://user-images.githubusercontent.com/45676906/115831292-5ece9a00-a44c-11eb-81d1-3582754f10e9.png)

`http://localhost:5000`으로 계속 들어가보면 숫자가 하나씩 증가하는 것을 볼 수 있습니다. 

<br>

## `정리하기`

![스크린샷 2021-04-23 오후 3 34 11](https://user-images.githubusercontent.com/45676906/115829076-7ce6cb00-a449-11eb-94e5-54b82af4d6ac.png)

`Docker Compose`를 사용하면 위와 같이 두 개의 컨테이너를 `Service`를 통해서 연결시켜줘서 컨테이너 간의 통신을 할 수 있게 됩니다.

<br> <br>

## `Docker Compose 다른 장점`

[여기](https://github.com/wjdrbs96/Today-I-Learn/blob/master/DevOps/Docker/%EB%8F%84%EC%BB%A4%20%EA%B8%B0%EB%B3%B8%EB%AA%85%EB%A0%B9%EC%96%B4.md) 에서 도커 기본 명령어를 공부했을 때
띄어쓰기라던지 오타 등등 되게 사소한 것을 실수하면 다시 명렁어를 쳐야하기 때문에 귀찮기도 하고 복잡하기도 한 느낌을 얻었을 것입니다.

그래서 이것을 편하게 해주는 것이 `docker compose` 입니다.

```
docker-compose version
```

![스크린샷 2021-04-23 오후 3 59 41](https://user-images.githubusercontent.com/45676906/115831736-f6cc8380-a44c-11eb-8463-8be22529188e.png)

도커를 설치하면 docker-compose도 같이 설치가 되기 때문에 위의 버전 확인 명령어로 버전을 확인할 수 있습니다. 

바로 실습을 해보겠습니다. Docker라는 디렉토리를 만든 후에 그 안에 `docker-compose.yml` 이라는 파일을 만들겠습니다.

```yaml
version: '2'
services:
  db:
    image: mysql:5.7 
    volumes:
      - ./mysql:/var/lib/mysql 
    restart: always 
    environment:
      MYSQL_ROOT_PASSWORD: wordpress
      MYSQL_DATABASE: wordpress 
      MYSQL_USER: wordpress 
      MYSQL_PASSWORD: wordpress
  wordpress:
    image: wordpress:latest
    volumes:
      - ./wp:/var/www/html 
    ports:
      - "8000:80" 
    restart: always 
    environment:
      WORDPRESS_DB_HOST: db:3306 
      WORDPRESS_DB_PASSWORD: wordpress
```

그리고 위에서 작성 했던 명렁을 yml 파일 형식에 맞춰서 위와 같이 작성했습니다. 대략적인 문법의 의미는 아래와 같습니다.

- `volume`: 현재(로컬 또는 리눅스 서버 등)에 존재하는 디렉토리와 컨테이너 내부 디렉터리를 매핑시킵니다. 
- `environment`: 서비스 컨테이너 내부에서 사용할 환경변수를 지정합니다.
- `restart`: 항상 재시작한다는 뜻입니다.

<br>

`docker-compose.yml` 파일과 같은 위치에서 아래의 명령어를 실행해보겠습니다.

```
docker-compose up         (이미지가 없을 때 이미지를 빌드하고 컨테이너 시작)
docker-compose up --build (이미지가 있든 없든 다시 빌드하고 실행)
```

<img width="1131" alt="스크린샷 2020-12-10 오전 2 36 13" src="https://user-images.githubusercontent.com/45676906/101665569-78b8a300-3a90-11eb-9dac-e40cef7c50aa.png">

그러면 위와 같이 `mysql`, `wordpress`가 실행되는 것을 볼 수 있습니다. 그리고 위에서 지정했던 `http://localhost:8000`으로 접속을 해보겠습니다.

![스크린샷 2020-12-10 오전 2 37 11](https://user-images.githubusercontent.com/45676906/101665666-9d147f80-3a90-11eb-8b43-6cf3834c0856.png)

이렇게 워드프레스가 잘 뜨는 것을 확인할 수 있습니다.

<br>

## `정리하기`

도커 명령어를 하나하나 입력하는 것보다는 yml 파일에서 `docker-compose`를 이용해서 사용하는 것이 더 편리하다는 장점이 있습니다.