# Wecode 7기 2차 프로젝트 Willy Front-end Repository
## 프로젝트 소개
Pilly 맞춤영양제 [필리 공식 홈페이지](https://pilly.kr/) clone project

## 개발 인원 및 기간
- 기간 : 2020.05.11 - 2020.05.22 (약 2주)
- 개발 인원 : 프론트엔드 [seonjakim](https://github.com/seonjakim), [Chae Lin Son](https://github.com/Soncl97), [HeejunShon](https://github.com/HeejunShon) 백엔드 [loyu78](https://github.com/loyu78), [pyheejin](https://github.com/pyheejin), [ckwlghks12](https://github.com/ckwlghks12)
- 백엔드 [Repository](https://github.com/wecode-bootcamp-korea/Willy-backend)

## 데모 영상
[Demo video](https://www.youtube.com/watch?v=2A3CRowoEP4&t=3s)

## 기술
- React.js (Functional Components)
- styled-components
- JavasSript
- HTML, CSS

## 구현 페이지, 컴포넌트
- 메인 페이지
- 슬라이더
- 회원가입 / 로그인
- 소셜 로그인 (with Kakao)
- 동적 설문조사 및 유저 맞춤 결과 페이지
- 원형 로딩바 (with canvas)
- 예외 처리 Toast 모달 (with react-toastify)
- 제품 카테고리 및 상세페이지
- 유저 리뷰 페이지 (with pagination)
- 회원별 장바구니 등록 및 목록 가져오기
- 마이 페이지
- 백엔드 API 이용
- Git merge로 conflict 해결
- 트렐로로 서로간의 업무 파악 및 Scrum방식으로 프로젝트 진행

## What did I do
#### Nav/Footer:

- Nav/Footer 레이아웃 구성
- json파일로 mock data를 만들어 메뉴 텍스트를 fetch
- 스크롤을 내리면 Nav의 배경색과 글씨색이 바뀌도록 구현
- 메뉴를 누르면 해당 페이지로 이동 및 해당 메뉴 밑에 border line 생성
- 로그인이 되면 Nav에 로그아웃 버튼 생성
- Redux를 이용하여 카트에 물건을 담으면 로그아웃 버튼 옆에 카트에 담은 물건 갯수가 나타나는 기능 구현

#### 메인:

- 메인 레이아웃 구성
- 자바스크립트로 상단에 숫자가 올라가도록 구현
- 백엔드 API로 이미지, 텍스트 데이터 fetch
- 자바스크립트로 3초마다 움직이는 배너 구현
- 배너 밑에 검은색 버튼을 클릭하면 해당 배너를 볼 수 있는 기능 구현
- QnA 부분에서 질문을 클릭하면 답변을 볼 수 있도록 구현

#### 제품보기:

- 제품보기 레이아웃 구성
- 장바구니 담기 버튼을 클릭하면 장비구니 추가됨 버튼으로 바뀌는 기능
- Redux를 이용하여 장바구니 버튼을 클릭하면 해당 제품의 정보가 백으로 넘어가고 store에도 저장되도록 구현
- Redux 장바구니 store에 중복된 상품 id값이 들어가지 않도록 구현
- 제품 컴포넌트를 클릭하면 해당 제품 상세페이지로 이동

#### 고객후기:

- 페이지를 스크롤하면 고객의 후기가 추가로 생성되는 페이지네이션 구현
- 후기를 클릭하면 해당 고객후기를 자세하게 볼 수 있는 페이지로 이동
- 이전 후기 버튼과 다음 후기 버튼을 누르면 해당 페이지로 이동
- 백엔드 API로 data fetch

#### 제품 상세페이지:

- 제품 상세페이지 레이아웃 구성
- 백엔드 API를 사용하여 제품 상세 데이터 fetch
- 제품들의 상세페이지를 모두 따로 만드는 것이 아니라 제품의 id값을 통해 알맞는 레이아웃으로 구성될 수 있도록 구성
- 하단에 고객후기 더보기 버튼을 누르면 고객후기가 더 생성되는 기능 구현

#### 로그인:

- 카카오 디벨로퍼 사이트를 참고하여 카카오 소셜 로그인 구현
- 로그인되면 자동으로 메인페이지로 이동하는 기능 구현
