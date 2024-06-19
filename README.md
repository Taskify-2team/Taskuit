
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

<br>

## 공통

- [x] 제시된 폰트, 컬러 시스템을 설정해 주세요.
- [x] 재사용성을 위해 공용 컴포넌트를 만들어 주세요.
- [ ] 반응형 웹 디자인을 준수해주세요.

## 상단 네비게이션바
<본인이 만든 대시보드인 경우>
![image](https://github.com/Taskify-2team/Taskuit/assets/99238479/2a18a77f-d029-414f-8151-a69fbe3fc8a8)
- 권한이 있는 대시보드의 경우, 왕관 아이콘이 표시되고 설정, 초대 버튼이 보입니다.


<본인이 만든 대시보드가 아닌 경우>
![image](https://github.com/Taskify-2team/Taskuit/assets/99238479/5918515d-eb3f-4eef-af3f-d137e9e7f0ba)
- 대시보드 타이틀에 왕관 아이콘이 숨김처리 됩니다.
- 설정, 초대 버튼이 숨김처리 됩니다.

<공통>
- 유저 프로필을 누르면 드롭 다운이 열립니다.
  - 내정보 ('/mypage')
  - 내 대쉬보드 ('/mydashboard')
  - 로그아웃 
- 현재 대시보드에 있는 맴버들의 프로필이 보이고, 인원수에 따라 2~3명 + 로 보입니다. (로그인 된 계정은 제외)
- 해당 프로필리스트 영역을 누르면, pagination으로 페이지별 5명의 인원을 출력하는 드롭다운이 보입니다. (로그인 된 계정 포함)
  
![image](https://github.com/Taskify-2team/Taskuit/assets/99238479/3523df7a-a8ad-4676-af84-658db29c0db1)

각 드롭다운은 ref를 사용하여 편의성 개선을 위해 외부 영역을 누르면 드롭다운이 닫히게 설계하였습니다.
 

## 사이드바

![image](https://github.com/Taskify-2team/Taskuit/assets/99238479/0ae5090c-32e5-413d-bea9-69a7b3d2277f)

- 로고를 누르면 ('/mydashboard/)로 이동합니다.
- 페이지네이션으로 구성되어 있으며, 각 페이지 별, 5개의 대시보드를 출력합니다.
- 자신이 만든 대시보드 옆에는 왕관 아이콘이 보입니다.
  
![image](https://github.com/Taskify-2team/Taskuit/assets/99238479/9766a994-712e-4b14-b8ce-eff789c5f68c)
- 호버 또는 현재 대시보드는 위와 같이 스타일이 추가 됩니다.

![image](https://github.com/Taskify-2team/Taskuit/assets/99238479/7cab9d62-4739-4d73-b30c-4e60977fe0d3) 이미지를 누르면 대시보드 추가 모달이 열립니다.



## 로그인 페이지(/login )
![image](https://github.com/Taskify-2team/Taskuit/assets/99238479/ed9c7129-b638-4f22-bac0-b3250dfcb219)

- 로고를 클릭하면 '/' 페이지로 이동합니다.
- 인풋 라벨을 누르면 해당 인풋에 focus 됩니다.
- 이메일, 비밀번호 인풋이 빈칸인 경우에서 focus out을 하면 "이메일 / 비밀번호를 입력해주세요" 라는 문구가 인풋 아래 출력됩니다.
  
![image](https://github.com/Taskify-2team/Taskuit/assets/99238479/1c334fcb-a4af-443d-964c-19ef17222cbe)

이메일 형식이 아닌 경우, 유효성 검사를 토대로 인풋 아래 "이메일 형식을 작성해주세요" 라는 문구가 출력됩니다.

인풋에 값이 있고, 에러상태가 아닌 경우에만 로그인 버튼이 활성화 됩니다.

올바른 값을 기입 후 로그인 버튼을 눌렀을때,
- 이메일이 등록되지 않은 경우 
   - 등록되지 않은 이메일이라는 문구가 출력됩니다.
- 비밀번호가 맞지 않는 경우
   - 비밀번호가 일치하지 않는다는 토스트가 화면 우측 상단에 출력됩니다.

화면 우측 하단에 테마를 변경 할 수 있는 팝업 버튼이 있습니다.

## 회원가입 페이지(/signup )
![image](https://github.com/Taskify-2team/Taskuit/assets/99238479/76c04c92-a70d-4f01-80e6-3b972a40fbb0)
- 로고를 클릭하면 '/' 페이지로 이동합니다.
- 인풋 라벨을 누르면 해당 인풋에 focus 됩니다.
- 이메일, 비밀번호 인풋이 빈칸인 경우에서 focus out을 하면 "이메일 / 비밀번호를 입력해주세요" 라는 문구가 인풋 아래 출력됩니다.
  
![image](https://github.com/Taskify-2team/Taskuit/assets/99238479/91d01605-445a-4bd7-82e9-6e102dcd1dec)

- 이메일 형식이 아닌 경우, 유효성 검사를 토대로 인풋 아래 "이메일 형식을 작성해주세요" 라는 문구가 출력됩니다.

- 인풋에 값이 있고, 이용약관이 체크되고, 에러상태가 아닌 경우에만 가입하기 버튼이 활성화 됩니다.

<유효성 검사>
- 이메일 형식만 기입 가능합니다.
- 닉네임은 최대 10글자 까지만 입력이 가능합니다.
- 비밀번호는 8글자 이상이어야 합니다.

<가입하기>
- 이미 사용중인 이메일로 가입을 시도하면, "이미 사용중인 이메일입니다." 라는 에러 문구와 토스트를 출력합니다.
- 닉네임이 10글자를 넘어가면 에러 문구를 출력합니다.
- 비밀번호 확인란은 onChange로 실시간 비밀번호 value 값과 비교하여 다를 경우,  "비밀번호가 일치하지 않습니다." 라는 에러 문구를 출력합니다.
- 올바른 값들과 이용약관에 동의한 경우 가입하기 버튼이 활성화 되며, 정상적으로 가입이 되는 경우 토스트를 출력하며 '/login' 페이지로 이동합니다.
 
- 화면 우측 하단에 테마를 변경 할 수 있는 팝업 버튼이 있습니다.

## 메인 랜딩 페이지(/ )

- [x] '로고 버튼'을 클릭하면 / 페이지로 이동합니다.
- [x] '로그인' 버튼을 클릭하면 /login 페이지로 이동합니다.
- [x] '회원가입' 버튼을 클릭하면 /signup 페이지로 이동합니다.
- [x] 로그인이 되어있으면 /dashboard/{첫번째 dashboardid} 로 이동합니다

## 나의 대시보드 페이지(/mydashboard)

- [x] '로고' 버튼을 클릭하면 / 페이지로 이동합니다. - 사이드바 부분이라 아직 구현안되어 있습니다.
- [x] 내가 만든 대시보드끝에는 👑 이 붙습니다 -
- [x] 내 대시보드는 페이지네이션으로 구현합니다.
- [x] 초대받은 대시보드는 무한스크롤로 구현합니다
- [x] 내 대시보드를 각각을 클릭하면 해당 대시보드 페이지로/dashboard/{dashboardid} 이동합니다.
- [x] '+' 버튼을 클릭하면 대시보드 생성 모달이 나타납니다.
- [x] 초대받은 대시보드가 없으면 “아직 초대받은 대시보드가 없어요”문구를 보여줍니다.
- [x] 초대받은 대시보드에서 이름(title)으로 검색이 가능합니다(키워드가 이름에 일부라도 포함되면 모두 검색됩니다.).
- [x] 초대받은 대시보드에서 '수락' 버튼을 누르면 대시보드가 추가됩니다.(초대 받은 대시보드 목록에서 유지됩니다 )
- [x] 초대받은 대시보드에서 '거절' 버튼을 누르면 해당 대시보드는 삭제됩니다.

## 대시보드 생성 모달(/mydashboard)

- [x] '+' 버튼을 클릭하면 대시보드 생성 모달이 나타납니다.
- [x] 대시보드 생성 모달에서 대시보드 이름과 색을 선택해야 '생성' 버튼이 활성화가 됩니다.
- [x] 대시보드 '생성'버튼을 누르면 대시보드가 생성이 되고 /dashboard/{dashboardid} 로 이동합니다

## 대시보드 페이지(dashboard/{dashboardid})

- [x] 네비게이션 상단 오른쪽에 초대받은 멤버가 보입니다.
- [x] 각 칼럼의 카드들은 무한스크롤로 이어집니다.
- [x] 내가 만든 보드는 상단에 '관리' 버튼이 보입니다.
- [x] '관리' 버튼을 누르면 /dashboard/{boardid}/edit로 이동합니다
- [x] '초대하기' 버튼을 누르면 초대하기 모달창이 나타납니다.
- [x] 내가 만든 대시보드 이름 우측에는 왕관 모양이 보입니다.
- [x] 각 컬럼 오른쪽에 해당 카드 개수가 보입니다.
- [x] '새로운 컬럼 추가하기' 버튼을 누르면 컬럼 추가하기 모달이 나타납니다.
- [x] 각 컬럼의 '+' 버튼을 누르면 해당 컬럼 할 일 생성 모달이 나타납니다.
- [x] 각 컬럼의 '톱니바퀴' 버튼을 누르면 컬럼 수정 모달이 나타납니다.
- [x] 생성된 할 일 카드를 클릭하면 해당 카드 상세 모달이 나타납니다.

## 할 일 카드 모달(/dashboard/{dashboardid} )

- [x] 만들어진 카드 정보를 보여줍니다.
- [ ] 댓글 input에 값이 비어있으면 '입력' 버튼이 비활성화 됩니다.
- [x] 댓글 input에 값을 입력하고 '입력' 버튼을 누르면 댓글이 남겨집니다.
- [x] 댓글은 무한스크롤로 이어집니다.
- [x] 내가 남긴 댓글에 '수정' 버튼을 누르면 내용을 수정할 수 있습니다
- [x] 내가 남긴 댓글에 '삭제' 버튼을 누르면 내용을 삭제할 수 있습니다
- [x] 오른쪽 상단 케밥을 누르면 드롭다운으로 수정하기, 삭제하기를 고를 수 있습니다.
- [x] '수정하기' 버튼을 누르면 할 일 수정 모달이 나타납니다.
- [x] '삭제하기' 버튼을 누르면 해당 카드가 삭제됩니다

## 할 일 수정 모달(/dashboard/{dashboardid})

- [x] 만들어진 카드 정보로 input이 기본값으로 채워집니다.
- [x] 값이 하나라도 바뀌면 '수정' 버튼이 활성화 됩니다.
- [x] '수정' 버튼을 누르면 해당 카드에 수정된 정보가 반영이 됩니다.
- [x] 마감일은 날짜 입력 라이브러리를 사용해서 입력을 받아주세요.

## 할 일 카드 생성 모달(/dashboard/{dashboardid})

- [x] 모든 input이 채워지면 '생성' 버튼이 활성화 됩니다.
- [x] 담당자는 드롭다운으로 초대받은 인원만 고를 수 있습니다.
- [x] 이미지는 최대 1개입니다.
- [x] 태그 색상은 랜덤입니다.
- [x] '생성' 버튼을 클릭하면 해당 컬럼 하단에 할 일 카드가 생깁니다.
- [x] 날짜 입력 라이브러리를 사용해서 입력을 받아주세요.

## 컬럼 추가 모달(/dashboard/{dashboardid})

- [x] 이름 input에 입력값이 없으면 '생성' 버튼은 비활성화 됩니다.
- [ ] 컬럼 이름이 중복이 되면 “중복된 컬럼 이름입니다” 경고창을 보여줍니다.
- [x] 활성화된 '생성'버튼을 누르면 컬럼이 추가됩니다.
- [x] 칼럼은 최대 10개까지 생성이 가능합니다.
- [x] 칼럼은 스크롤로 이어집니다.

## 컬럼 관리 모달(/dashboard/{dashboardid})

- [x] '삭제하기' 버튼을 누르면 “컬럼의 모든 카드가 삭제됩니다” 경고창을 보여줍니다.
- [x] '예' 버튼을 누르면 해당 컬럼의 모든 할 일 카드들이 삭제가 됩니다.
- [x] 수정할 이름을 넣고 '변경'버튼을 누르면 컬럼 이름이 수정됩니다.

## 대시보드 수정(/dashboard/{dashboardid}/edit)

- [x] 대시보드 이름이나 색을 바꾸고 '변경' 버튼을 누르면 대시보드가 수정됩니다.
- [ ] '돌아가기' 버튼을 누르면 /dashboard/{dashboardid}로 이동합니다.
- [ ] 대시보드 각 구성원 오른쪽에 있는 '삭제' 버튼을 누르면 구성원이 삭제가 됩니다
- [x] 구성원 리스트는 페이지네이션으로 구현합니다.
- [x] 초대 내역 리스트는 페이지네이션으로 구현합니다.
- [x] '초대하기' 버튼을 누르면 초대하기 모달창이 나타납니다.
- [x] 초대 내역 각 오른쪽의 '취소'버튼을 누르면 해당 초대는 취소가 됩니다.

## 초대하기 모달(/dashboard/{dashboardid}/edit)

- [x] 유효한 이메일을 입력하고 '초대' 버튼을 누르면 해당 이메일을 가진 유저에게 초대가 갑니다.
- [ ] 중복된 이메일로 초대를 보낼 수 있습니다.
- [ ] 값을 입력하지 않으면 '초대' 버튼은 활성화되지 않습니다

## 계정 관리(/mypage)

- [x] '+' 버튼을 누르면 이미지를 업로드 할 수 있습니다.
- [x] 이메일은 수정할 수 없습니다.
- [x] 닉네임 또는 이미지를 바꾸고 '저장' 버튼을 누르면 정보가 수정됩니다.
- [x] 새 비밀번호 확인 input에서 focus out 일때 새 비밀번호 input 값과 다를 경우 비밀번호 input에 빨간색 테두리와 아래에 “비밀번호가 일치하지않습니다” 빨강색 에러 메세지가 보입니다.
- [x] 모든 input이 채워지면 '변경' 버튼이 활성화 됩니다.
- [x] '변경' 버튼을 눌렀을때 현재 비밀번호 값이 틀리면 “현재 비밀번호가 틀립니다” 경고창이 나타납니다.
- [x] 정확한 현재 비밀번호 값을 입력하고 '변경' 버튼을 누르면 비밀번호가 변경이 됩니다.
