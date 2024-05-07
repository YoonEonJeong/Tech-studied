---
sidebar_label: '라우팅'
sidebar_position: 3
---
# 라우팅 연구


## 라우팅
Docusaurus에서 라우팅(Routing)은 사용자가 웹사이트 내에서 다양한 페이지 간에 이동할 수 있도록 경로를 정의하고 관리하는 메커니즘을 의미합니다. 웹 애플리케이션에서 라우팅은 중요한 기능 중 하나로, 사용자가 특정 URL을 방문했을 때 해당 URL에 맞는 적절한 페이지나 콘텐츠를 보여주는 역할을 합니다.

### 라우팅 설정 방법

`Jekyll`이나 `Next`와 같은 다른 정적 사이트 생성기에 익숙하다면, 라우팅 접근 방식이 익숙할 것입니다.<br></br> 
`/src/pages/` 디렉토리 아래에 생성한 모든 `JavaScript` 파일은 자동으로 웹사이트 페이지로 변환되며
`/src/pages/` 디렉토리 계층을 따릅니다. 


1. 정적 페이지 라우팅: 사용자가 src/pages 디렉토리 내에 리액트 컴포넌트로 페이지를 만들면, Docusaurus는 이를 자동으로 감지하여 라우트를 생성합니다. 예를 들어, src/pages/about.js 파일은 /about 경로로 자동 라우팅됩니다.

2. 문서 페이지 라우팅: 문서(docs)는 docs 디렉토리 내에 마크다운 파일로 작성됩니다. 각 문서의 상단에 있는 YAML front matter에서 id와 slug를 정의하여 라우팅 경로를 커스터마이즈할 수 있습니다.

3. 블로그 포스트 라우팅: 블로그 포스트는 blog 디렉토리 내에 마크다운 파일로 저장됩니다. 파일명이나 포스트 내 front matter에서 정의된 slug 값을 통해 각 포스트의 URL을 결정합니다.

Docusaurus 공식 페이지의 튜토리얼에서의 routing 방식의 예시는 다음과 같습니다  
    1. `/src/pages/index.js` → [baseUrl]
    2. `/src/pages/foo.js` → [baseUrl]/foo
    3. `/src/pages/foo/test.js` → [baseUrl]/foo/test
    4. `/src/pages/foo/index.js` → [baseUrl]/foo/

각 페이지는 컴포넌트이며, 페이지 디자인을 자체 스타일로 사용자 정의하려면 페이지 컴포넌트와 스타일을 해당 디렉토리에 함께 배치하는 것이 좋습니다. 

다음은 `support` 페이지를 만드는 예시입니다
    - `/src/pages/support.js` 파일 추가
    - /src/pages/support/ 디렉토리 및 /src/pages/support/index.js 파일 생성