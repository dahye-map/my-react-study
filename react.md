# React App을 만드는 방법

1. React.js
   node 기반의 javascript ui 라이브러리
2. webpack
   다수의 자바스크립트 파일을 하나의 파일로 합쳐주는 모듈 번들 라이브러리
3. babel
   JSX등의 쉽고 직관적인 자바스크립트 문법을 사용할 수 있도록 해주는 라이브러리

Boiler Plate 이미 세팅 완료된 패키지

### Lifecycle

Mount -> Update -> UnMount
ex) 초기화 작업 -> 예외 처리 작업 -> 메모리 정리 작업

### Memoization

이미 계산 해 본 연산 결과를 기억해두었다가
동일한 계산을 시키면 다시 연산하지 않고 기억해두었던 데이터를 반환 시키게 하는 방법

### Multipage Application (MPA)

페이지가 이동할 때마다 새로고침
대체의 홈페이지들의 방식

### Single Page Application (SPA)

Client Side Rendering (CSR)
하나의 페이지로 여러 요청을 받음

### React Router v6

React에서 CSR기반의 페이지 라우팅을 할 수 있게 해주는 라이브러리

1. Path Variable
   useParams
2. Query String
   useSearchParams
3. Page Moving
   useNavigate
