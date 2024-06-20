
# Taskuit - 일정 관리 서비스

![thumb](https://github.com/Taskify-2team/Taskuit/assets/105799083/2c21f849-b4d6-4c3c-b4e9-bb354a77c26a)

<br />

## 프로젝트 소개
- 일정 관리 서비스를 제공하는 플랫폼인 'Taskuit'입니다.
- 대시보드를 생성하여 멤버를 초대하고 일정을 관리할 수 있어요.

<br />

## 배포 사이트
https://taskuit.vercel.app/

<br />

## 개발 환경

### 1. 기술 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"><img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"><img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"><img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"><img src="https://img.shields.io/badge/reacthookform-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white"><img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"><img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white"><img src="https://img.shields.io/badge/mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white"><img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"><img src="https://img.shields.io/badge/reactdatepicker-eeeeee?style=for-the-badge&logoColor=white"><img src="https://img.shields.io/badge/reactcolorpicker-6a009b?style=for-the-badge&logoColor=white">

### 2. 협업 툴

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">

### 3. 서비스 배포 환경

<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

### 4. 디자인 시안

<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

### 5. 코드 컨벤션

<a href="https://github.com/Taskify-2team/Taskuit/wiki/%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98">코드 컨벤션</a>

### 6. 커밋 컨벤션

<a href="https://github.com/Taskify-2team/Taskuit/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98">커밋 컨벤션</a>

<br />

## 팀원 역할 분담

### ⚽️ 오다은
- UI
  - 공통 컴포넌트 : TextInput, DateInput, TagInput, TextArea
  - 페이지 : Dashboard 페이지
  - 반응형 작업
- 기능
  - 카드 및 댓글 무한 스크롤, date 피커, card 상세모달 구현
<br />

### 👒 이진욱
- UI
  - 공통 컴포넌트 : Modal, Toast
  - 페이지 : mypage 페이지
- 기능
  - 전역 상태 관리, 모달 구현, 토스트 구현, 애니메이션, 태그 색상 커스텀
<br />

### 🎾 정지성
- UI
  - 공통 컴포넌트 : SideMenu, DashBoardHeader, LandingHeader, UserProfile, UserInfo, HeaderButtons
  - 페이지 : Login, SignUp 페이지
  - 반응형 작업 
- 기능
  - 사이드메뉴 페이지네이션, Auth 리액트 훅폼, ProfileList 드롭다운 페이지네이션
 
<br />

### 🖥️ 박상준
- UI
  - 공통 컴포넌트 : Button
  - 페이지 : mydashboard, dashboardEdit 페이지, 랜딩 페이지
- 기능
  - 컬러 피커, 드래그앤 드롭, 드래그 사이드 스크롤, 테마/언어 변경
<br />
  
## 폴더 구조

``` ┣ 📜.env.local
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜Portal.tsx
 ┣ 📜README.md
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.mjs
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.mjs
 ┣ 📜request.http
 ┣ 📜tailwind.config.ts
 ┣ 📜tsconfig.json
📦components
 ┣ 📂AppLayout
   ┣ 📂DashboardLayout
   ┣ 📂Edit
   ┣ 📂LandingPageLayout
   ┣ 📂MyDashboard
   ┣ 📂MyPageLayout
   ┗ 📜AppLayout.tsx
 ┣ 📂AuthThemeButton
 ┣ 📂Buttons
 ┣ 📂Chips
 ┣ 📂ColorSelector
 ┣ 📂Footer
 ┣ 📂Headers
 ┣ 📂Inputs
 ┣ 📂Loading
 ┣ 📂Modals
 ┣ 📂SideMenu
 ┣ 📂TextCounter
 ┣ 📂Toasts
 ┣ 📂UserInfo
 ┗ 📜index.ts
📦db
 ┣ 📂config
   ┗ 📜index.ts
 ┣ 📂middlewares
   ┗ 📜cors.ts
 ┗ 📂models
   ┣ 📜tag.ts
   ┗ 📜user.ts
📦hooks
 ┣ 📜useApp.ts
 ┣ 📜useAsync.ts
 ┣ 📜useDebounce.ts
 ┗ 📜useEditBoard.ts
📦public
 ┣ 📂icons
 ┣ 📂images
 ┗ 📜favicon.ico
📦pages
 ┣ 📂api
   ┣ 📂tags
   ┗ 📂users
 ┣ 📂dashboard
   ┗ 📂[dashboardId]
 ┣ 📜404.tsx
 ┣ 📜_app.tsx
 ┣ 📜_document.tsx
 ┣ 📜index.tsx
 ┣ 📜login.tsx
 ┣ 📜mydashboard.tsx
 ┣ 📜mypage.tsx
 ┗ 📜signup.tsx
📦service
 ┣ 📜auth.ts
 ┣ 📜cards.ts
 ┣ // ...
📦store
 ┣ 📂context
   ┣ 📂Provider
     ┗ 📜TotalProvider.tsx
   ┣ 📜DbIdContext.ts
   ┣ 📜LanguageContext.ts
   ┣ // ...
 ┣ 📂reducers
   ┣ 📜cardReducer.ts
   ┣ 📜columnReducer.ts
   ┣ // ...
 ┗ 📜store.ts
📦styles
 ┣ 📜datepicker.css
 ┗ 📜globals.css
📦types
 ┣ 📜auth.ts
 ┣ 📜dashboard.ts
 ┣ // ...
📦types
 ┣ 📜auth.ts
 ┣ 📜dashboard.ts
 ┗ // ...
```

<br />

## 사이드바 & 상단 네비게이션바

![image](https://github.com/Taskify-2team/Taskuit/assets/99238479/ee095245-5937-462d-9fd9-4b6e77a72bfb)

- 로고를 누르면 ('/mydashboard/)로 이동합니다.
- 페이지네이션은 각 페이지 별, 5개의 대시보드 / 프로필을 출력합니다.
- isCreatedByMe 값에 따라 버튼들과 왕관 모양 아이콘이 보임/숨김 처리됩니다.
- 현재 active인 대시보드 또는 호버시에 active style이 적용됩니다.
- 사이드 메뉴의 추가버튼을 통해 대시보드 추가 모달을 띄웁니다.
- 상단 네비게이션의 프로필리스트를 클릭하면, 현 대시보드의 참여 맴버 프로필을 보여줍니다.
- 유저프로필을 클릭하면, 내정보(/mypage), 내 대시보드(/mydashboard), 로그아웃 드롭다운이 보입니다.


## 로그인 페이지(/login ) & 회원가입 페이지(/signup)

| <img width="1920" alt="스크린샷 2024-06-19 오전 11 44 55" src="https://github.com/Taskify-2team/Taskuit/assets/99238479/ed9c7129-b638-4f22-bac0-b3250dfcb219"> | <img width="1920" alt="스크린샷 2024-06-19 오전 11 47 58" src="https://github.com/Taskify-2team/Taskuit/assets/99238479/76c04c92-a70d-4f01-80e6-3b972a40fbb0"> |
|---|---|

- 유효성 검사에 따라 에러 메세지를 출력합니다.
- 비밀번호가 틀리거나, 존재하는 이메일로 가입을 시도할 경우 에러 메세지와 토스트를 추가로 출력합니다.
- 인풋값이 없거나, 에러 상태인 경우에는 로그인/가입하기 버튼이 비활성화 됩니다.
- 라벨을 누르면 해당 인풋에 focus됩니다.
- 눈모양 아이콘을 누르면 비밀번호 인풋이 text/password 로 타입을 토글합니다.
- 정상적으로 가입이 된 경우, 토스트를 출력하며 /login 페이지로 이동합니다.
- 정상적으로 로그인 된 경우, /mydashboard 페이지로 이동합니다. 


## 메인 랜딩 페이지(/ )
<img width="1908" alt="스크린샷 2024-06-20 오전 11 13 00" src="https://github.com/Taskify-2team/Taskuit/assets/137033202/a489eebd-0757-44b8-9cb7-49bf4ee58373">

- '로고 버튼'을 클릭하면 / 페이지로 이동합니다.
- '로그인' 버튼을 클릭하면 /login 페이지로 이동합니다.
- '회원가입' 버튼을 클릭하면 /signup 페이지로 이동합니다.
-  로그인이 되어있으면 /dashboard/{첫번째 dashboardid} 로 이동합니다

## 나의 대시보드 페이지(/mydashboard)

<img width="1908" alt="스크린샷 2024-06-20 오전 11 17 48" src="https://github.com/Taskify-2team/Taskuit/assets/137033202/d9415315-30d8-4a87-8e92-74a998a00798">

- 내가 만든 대시보드끝에는 👑 이 붙습니다.
- 내 대시보드는 페이지네이션으로 구현합니다.
- 초대받은 대시보드는 무한스크롤로 구현합니다.
- 내 대시보드를 각각을 클릭하면 해당 대시보드 페이지로/dashboard/{dashboardid} 이동합니다.
- '+' 버튼을 클릭하면 대시보드 생성 모달이 나타납니다.
- 초대받은 대시보드가 없으면 “아직 초대받은 대시보드가 없어요”문구를 보여줍니다.
- 초대받은 대시보드에서 이름(title)으로 검색이 가능합니다.(키워드가 이름에 일부라도 포함되면 모두 검색됩니다.)
- 초대받은 대시보드에서 '수락' 버튼을 누르면 대시보드가 추가됩니다.(초대 받은 대시보드 목록에서 유지됩니다.)
- 초대받은 대시보드에서 '거절' 버튼을 누르면 해당 대시보드는 삭제됩니다.

## 대시보드 생성 모달(/mydashboard)
<img width="1908" alt="스크린샷 2024-06-20 오전 11 18 09" src="https://github.com/Taskify-2team/Taskuit/assets/137033202/cd1c9b59-2c06-4a87-a2cf-5e7bd7a38b54">

- '+' 버튼을 클릭하면 대시보드 생성 모달이 나타납니다.
- 대시보드 생성 모달에서 대시보드 이름과 색을 선택해야 '생성' 버튼이 활성화가 됩니다.
- 대시보드 '생성'버튼을 누르면 대시보드가 생성이 되고 /dashboard/{dashboardid} 로 이동합니다

## 대시보드 페이지(dashboard/{dashboardid})

<img width="1920" alt="대시보드 페이지 스크린샷" src="https://github.com/Taskify-2team/Taskuit/assets/105799083/6b799d61-da8c-45a9-9940-b7083c75a703">

- 각 칼럼의 카드들이 무한스크롤로 이어집니다.
- 내가 만든 보드는 상단에 '관리' 버튼과 '초대하기' 버튼이 보입니다.
- '관리' 버튼을 누르면 /dashboard/{boardid}/edit로 이동합니다
- '초대하기' 버튼을 누르면 초대하기 모달창이 나타납니다.
- 내가 만든 대시보드 이름 우측에는 왕관 모양이 보입니다.
- '새로운 컬럼 추가하기' 버튼을 누르면 컬럼 추가하기 모달이 나타납니다.
- 각 컬럼의 '+' 버튼을 누르면 해당 컬럼 할 일 생성 모달이 나타납니다.
- 내가 만든 보드는 각 컬럼의 '톱니바퀴' 버튼을 누르면 컬럼 수정 모달이 나타납니다.
- 생성된 할 일 카드를 클릭하면 해당 카드 상세 모달이 나타납니다.

## 할 일 카드 모달

<img width="1920" alt="스크린샷 2024-06-19 오전 11 40 19" src="https://github.com/Taskify-2team/Taskuit/assets/105799083/a41341c8-ce47-4a81-ae01-8a7ae5253fd7">

- 만들어진 카드 정보를 보여줍니다.
- 댓글 input에 값을 입력하고 '입력' 버튼을 누르면 댓글이 남겨집니다.
- 댓글은 무한스크롤로 이어집니다.
- 내가 남긴 댓글을 수정하거나 삭제할 수 있습니다.
- 오른쪽 상단 케밥을 누르면 드롭다운으로 수정하기, 삭제하기를 고를 수 있습니다.
- '수정하기' 버튼을 누르면 할 일 수정 모달이 나타납니다.
- '삭제하기' 버튼을 누르면 해당 카드가 삭제됩니다

## 태그 색상 커스텀

<img width="393" alt="스크린샷 2024-06-20 16 10 41" src="https://github.com/Taskify-2team/Taskuit/assets/70879978/8a987d7f-bb65-4c38-ba21-b4540892ff8d">

- 할일 카드의 색상을 원하는대로 선택할 수 있습니다.

## 사진 업로드

<img width="429" alt="스크린샷 2024-06-20 16 12 38" src="https://github.com/Taskify-2team/Taskuit/assets/70879978/788b11d3-2515-45a9-8a9e-97e596d6cb62">

- 할일 카드의 추가할 사진, 프로필 사진에 사용할 사진을 업로드 할때 용량이 4메가 이하로 제한하여 불필요한 리퀘스트를 막게 하였습니다.

## 할 일 생성, 수정 모달(/dashboard/{dashboardid})

| <img width="1920" alt="스크린샷 2024-06-19 오전 11 44 55" src="https://github.com/Taskify-2team/Taskuit/assets/105799083/6e0b2cce-0c77-4ec3-ab8f-e1448a41edde"> | <img width="1920" alt="스크린샷 2024-06-19 오전 11 47 58" src="https://github.com/Taskify-2team/Taskuit/assets/105799083/f57c5419-7481-4f77-9c9f-d3a772624f61"> |
|---|---|

- 할 일 수정 모달은 만들어진 카드 정보로 input이 기본값으로 채워집니다.
- 값이 하나라도 바뀌면 '수정' 버튼이 활성화 됩니다.
- 태그 색상을 9가지 중 선택할 수 있습니다.
- '수정' 버튼을 누르면 해당 카드에 수정된 정보가 반영이 됩니다.

## 컬럼 추가 모달(/dashboard/{dashboardid})
<img width="569" alt="스크린샷 2024-06-18 10 36 25" src="https://github.com/Taskify-2team/Taskuit/assets/70879978/6ab4c45e-a8d8-46ed-9d55-2ff57506c6f2">

- 이름 input에 입력값이 없으면 '생성' 버튼은 비활성화 됩니다.
- 활성화된 '생성'버튼을 누르면 컬럼이 추가됩니다.
- 칼럼은 최대 10개까지 생성이 가능합니다.
- 칼럼은 스크롤로 이어집니다.

## 컬럼 관리 모달(/dashboard/{dashboardid})
<img width="566" alt="스크린샷 2024-06-18 10 37 10" src="https://github.com/Taskify-2team/Taskuit/assets/70879978/f5da3acd-ef07-4741-b8b5-afd76a8a20cb">

- '삭제하기' 버튼을 누르면 “컬럼의 모든 카드가 삭제됩니다” 경고창을 보여줍니다.
- '예' 버튼을 누르면 해당 컬럼의 모든 할 일 카드들이 삭제가 됩니다.
- 수정할 이름을 넣고 '변경'버튼을 누르면 컬럼 이름이 수정됩니다.

## 대시보드 수정(/dashboard/{dashboardid}/edit)
<img width="1908" alt="스크린샷 2024-06-20 오전 11 19 06" src="https://github.com/Taskify-2team/Taskuit/assets/137033202/c25465b8-d541-40d5-b49f-d7c8c6a04c5e">

- 대시보드 이름이나 색을 바꾸고 '변경' 버튼을 누르면 대시보드가 수정됩니다.
- '돌아가기' 버튼을 누르면 /dashboard/{dashboardid}로 이동합니다.
- 대시보드 각 구성원 오른쪽에 있는 '삭제' 버튼을 누르면 구성원이 삭제가 됩니다.
- 구성원 리스트는 페이지네이션으로 구현합니다.
- 초대 내역 리스트는 페이지네이션으로 구현합니다.
- '초대하기' 버튼을 누르면 초대하기 모달창이 나타납니다.
- 초대 내역 각 오른쪽의 '취소'버튼을 누르면 해당 초대는 취소가 됩니다.

## 초대하기 모달(/dashboard/{dashboardid}/edit)
<img width="1908" alt="스크린샷 2024-06-20 오전 11 19 17" src="https://github.com/Taskify-2team/Taskuit/assets/137033202/1cc332e2-0e63-47c0-b978-494e8c3fdd36">

- 유효한 이메일을 입력하고 '초대' 버튼을 누르면 해당 이메일을 가진 유저에게 초대가 갑니다.
- 중복된 이메일로 초대를 보낼 수 있습니다.
- 값을 입력하지 않으면 '초대' 버튼은 활성화되지 않습니다

## 계정 관리(/mypage)
<img width="660" alt="스크린샷 2024-06-20 12 24 57" src="https://github.com/Taskify-2team/Taskuit/assets/70879978/432976d0-51ef-4bc7-8bd8-bdd6a2ce5d00">

- '+' 버튼을 누르면 이미지를 업로드 할 수 있습니다.
- 이메일은 수정할 수 없습니다.
- 닉네임 또는 이미지를 바꾸고 '저장' 버튼을 누르면 정보가 수정됩니다.
- 새 비밀번호 확인 input에서 focus out 일때 새 비밀번호 input 값과 다를 경우 비밀번호 input에 빨간색 테두리와 아래에 “비밀번호가 일치하지않습니다” 빨강색 에러 메세지가 보입니다.
- 모든 input이 채워지면 '변경' 버튼이 활성화 됩니다.
- '변경' 버튼을 눌렀을때 현재 비밀번호 값이 틀리면 “현재 비밀번호가 틀립니다” 경고창이 나타납니다.
- 정확한 현재 비밀번호 값을 입력하고 '변경' 버튼을 누르면 비밀번호가 변경이 됩니다.

## 컬러 피커
<img width="820" alt="스크린샷 2024-06-20 오후 1 25 51" src="https://github.com/Taskify-2team/Taskuit/assets/137033202/9e660f4a-f935-4804-95ab-9d1030d8a463">

- 대시보드 색상을 지정된 값이 아닌 사용자가 직접 커스텀 가능합니다

## 테마 변경
<img width="1430" alt="스크린샷 2024-06-20 오후 1 26 51" src="https://github.com/Taskify-2team/Taskuit/assets/137033202/9f65c1a8-ca6b-48b4-b44f-3ae3439512f1">

- 상단 네이게이션 바에 있는 테마 버튼은 누르면 다크모드로 변경됩니다.

## 언어 변경
<img width="1430" alt="스크린샷 2024-06-20 오후 1 41 52" src="https://github.com/Taskify-2team/Taskuit/assets/137033202/16161165-8e7d-4b97-9d3c-8001038e4539">

- 상단 네이게이션 바에 있는 언어 버튼을 누르면 영어로 변경됩니다.

## 드래그 앤 드랍

- 대시보드의 칼럼 할일 목록을 마우스로 드레그해 상태를 변경할수 있습니다.

## 가로 스크롤

- 대시보드 페이지에서 마우스를 클릭해 가로 스크롤이 가능합니다.


