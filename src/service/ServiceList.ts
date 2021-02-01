const serviceList = {
    areaCode : {
        method: 'get',
        serviceName: '지역코드',
        serviceCode:'areaCode'
    },
    categoryCode : {
        method: 'get',
        serviceName: '서비스 분류코드',
        serviceCode: 'categoryCode'
    },
    areaBasedList : {
        method: 'get',
        serviceName: '지역기반 관광정보',
        serviceCode: 'areaBasedList'
    },
    locationBasedList : {
        method: 'get',
        serviceName: '위치기반 관광정보',
        serviceCode: 'locationBasedList'
    },
    searchKeyword : {
        method: 'get',
        serviceName: '키워드 검색',
        serviceCode: 'searchKeyword'
    },
    searchFestival : {
        method: 'get',
        serviceName: '행사정보',
        serviceCode: 'searchFestival'
    },
    searchStay : {
        method: 'get',
        serviceName: '숙박정보',
        serviceCode: 'searchStay'
    },
    detailCommon : {
        method: 'get',
        serviceName: '공통정보 (상세정보1)',
        serviceCode: 'detailCommon'
    },
    detailIntro : {
        method: 'get',
        serviceName: '공통정보 (상세정보2)',
        serviceCode: 'detailIntro'
    },
    detailInfo : {
        method: 'get',
        serviceName: '공통정보 (상세정보3)',
        serviceCode: 'detailInfo'
    },
    detailImage : {
        method: 'get',
        serviceName: '이미지정보 (상세정보4)',
        serviceCode: 'detailImage'
    },
}

export default serviceList