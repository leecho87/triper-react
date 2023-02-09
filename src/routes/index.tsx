// 회원 컴포넌트
import LoginPage from 'pages/login/LoginPage'
// 컨텐츠 컴포넌트
import MainPage from 'pages/main/MainPage'
import DetailPage from 'pages/detail/DetailPage'
import SearchPage from 'pages/search/SearchPage'
import MyTourPage from 'pages/myTour/MyTourPage'

export const AuthRoutes = [
  {
    path: "/login",
    name: "로그인",
    component: LoginPage,
  }
];

export const TourRoutes = [
  {
    path: "/",
    name: "메인",
    component: MainPage
  },
  {
    path: "/detail",
    name: "상세",
    component: DetailPage
  },
  {
    path: "/search",
    name: "검색결과",
    component: SearchPage
  },
  {
    path: "/MyTour",
    name: "내여행",
    component: MyTourPage
  }
];