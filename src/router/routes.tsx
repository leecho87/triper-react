import pages from '@router/pages';

const ROUTES = [
    {
        key: "HOME",
        path: "/",
        exact: true,
        title: "홈",
        component: pages.Home
    },
    {
        key: "MEMBER",
        path: "/member",
        exact: true,
        title: "회원",
        component: pages.Member
    },
    {
        key: "SEARCH",
        path: "/search",
        exact: true,
        title: "검색",
        component: pages.Search
    },
];

export default ROUTES;
