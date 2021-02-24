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
        key: "SEARCH",
        path: "/search",
        exact: true,
        title: "검색",
        component: pages.Search
    },
    {
        key: "LOCATION",
        path: "/location",
        exact: true,
        title: "주변",
        component: pages.Location
    },
    {
        key: "MEMBER",
        path: "/member",
        exact: true,
        title: "내정보",
        component: pages.Member
    },
];

export default ROUTES;
