# 원티드 프리온보딩 프론트엔드 코스 사전과제
<br />

![untitled](https://user-images.githubusercontent.com/92494452/178091826-ba330082-fbff-483f-b64b-862e576e452a.gif)

## :cloud: to use

- react router v6
- axios
- context API
- styled-components
- functional components
- react-icons
<br />

## :cloud: data

- FEEDDATA.json
- USERDATA.json
<br />

## :cloud: folder tree

```
├─components
│  ├─CommonUI
│  ├─Feeds
│  │  └─FeedComment
│  ├─Header
│  └─Login
├─pages
├─store
├─styles
└─utils
```

- components
    - CommonUI : 공통적으로 사용된 UI 컴포넌트들을 모아두었습니다. (input, loading spinner, card)
    - Feeds : 메인 피드에 관련된 컴포넌트들이 위치합니다.
        - 댓글에 관한 컴포넌트들은 따로 feedComment 디렉토리로 분리했습니다.
    - Header
    - Login : 로그인 폼에 관한 디렉토리입니다.
- pages
    - 로그인 페이지와 메인 페이지, 404 페이지로 구분했습니다.
- store
    - 로그인 상태를 관리하기 위한 컨택스트가 위치합니다.
- utils
    - 로그인 검증을 위한 정규식 함수가 위치합니다.
<br />

## :cloud: assignment

### 1 LOGIN

- input 2개, button 1개의 구성
- Ref를 사용해서 랜더링 최적화
- 사용자가 id, pw 입력 후
    - local storage에 정보 저장
    - 로그인 성공 시 메인 페이지로 이동
    

### 2 GNB

- 스크롤 시 화면 상단에 고정되는 stiky GNB
- 기능없는 input 1개와 logout 아이콘 1개로 구성 **(+UI를 고려해 로고 아이콘을 넣었습니다.)**
- mobile 시 input이 사라지고, 나머지 요소들은 space-between 정렬

### 3 Validation

- email과 password의 유효성 확인
    - email 조건: @와 . 포함
    - password 조건: 대문자, 숫자, 특수문자 포함 8자리 이상
    - 로그인 시 등록되어 있는지 일치 여부 확인
- UX
    - email 조건에 부합하지 않을 경우 input의 border 색상이 red로 변경
    - password 조건에 부합하지 않을 경우 input의 border 색상이 red로 변경
    - 두 조건이 모두 통과되었을 경우 button 색상을 진하게 변경
- 정규표현식 사용
- validation에 관련된 함수 분리

### 4 Routing

- 로그인, 로그아웃 시 라우팅 로직을 통해 페이지가 이동되도록 구현
    - local storage
- 로그인 성공 시 라우터에서 main page로 이동
- 로그아웃 시 local storage가 삭제되면 login page로 이동
- history push를 사용하지 말 것

### 5 feeds

- 인스타그램과 유사한 UI
- feed의 정보는 public/data 디렉토리에 json 형식으로 구성
- fetch, axios를 이용해 feed의 data를 요청
- feed는 최소 3개 이상 렌더링
- feed에 enter key나 클릭으로 게시 가능한 댓글 기능
- feed는 화면 중앙에 위치해야 하며 반응형
- 댓글 게시 후 초기화되는 input 구현
- feed의 이미지는 각각 사이즈가 달라야 함
    - [https://source.unsplash.com/random/600x500](https://source.unsplash.com/random/600x500)
    - [https://source.unsplash.com/random/900x500](https://source.unsplash.com/random/900x500)
    - [https://source.unsplash.com/random/700x1080](https://source.unsplash.com/random/700x1080)
- feed의 이미지가 먼저 로딩된 후 컴포넌트가 로딩되도록 구현
    - image.onload
<br />

## :cloud: result

<img src="https://user-images.githubusercontent.com/92494452/178092330-a74b45b4-c90d-4115-a8ca-55f71420fbd1.jpg" alt="result" width="30%" />
