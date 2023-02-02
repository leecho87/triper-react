// 회원 컴포넌트
import LoginPage from 'pages/login/LoginPage'
// 컨텐츠 컴포넌트
import MainPage from 'pages/main/MainPage'
import SearchPage from 'pages/search/SearchPage'
import CashBookPage from 'pages/cashbook/CashBookPage'

export const AuthRoutes = [
  {
    path: "/login",
    name: "로그인",
    component: LoginPage
  }
]

export const TourRoutes = [
  {
    path: "/",
    name: "메인",
    component: MainPage
  },
  {
    path: "/search",
    name: "검색결과",
    component: SearchPage
  },
  {
    path: "/cashbook",
    name: "가계부",
    component: CashBookPage
  }
];