---
sidebar_label: 'Git/Github 설치 및 환경설정'
sidebar_position: 2
---

# Git/Github 사용법

본 문서는 **Git**과 **Github**의 사용법을 익히는 문서입니다.

## 전제 조건
본 사용법은 Windows OS 기반이며, VSCode를 사용하였습니다. vscode 및 extension 등이 설치가 되어 있음을 전제합니다.

## 환경 설정
Git을 수행하기 위해서는 다음과 같은 환경을 설정해야 합니다.
1. **Git**, **Git bash** 설치
    - [git](https://git-scm.com/)에서 **git**을 설치합니다, **git**을 설치하면 자동으로 **git bash**또한 설치됩니다.

        <!-- <img src="/img/git_homepage.png" width="300"/> -->
    
    - 설치 후 `git -v`를 terminal에 입력하여 버전이 확인되면 설치가 완료 되었습니다

3. **Github** 계정 생성

4. **VS Code**의 **Git Graph** 익스텐션 설치
    - VS Code의 익스텐션에서 **Git graph**를 검색하여 설치합니다
        <!-- <img src="/img/git_graph.png" width="300"/> -->
        <!-- <br></br>설치가 완료되면 다음과 같은 화면을 볼 수 있습니다 -->

## 원격 저장소(github)와 로컬 저장소 연동하기
1. 먼저 VS Code를 열고 새 터미널을 띄웁니다

    :::tip
    `git bash` 혹은 `cmd` 창을 열어도 무관합니다.
    :::