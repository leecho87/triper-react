/**
    1	areaCode	지역코드 조회
    2	categoryCode	서비스 분류코드 조회
    3	areaBasedList	지역기반 관광정보 조회
    4	locationBasedList	위치기반 관광정보 조회
    5	searchKeyword	키워드 검색 조회
    6	searchFestival	행사정보조회
    7	searchStay	숙박정보조회
    8	detailCommon	공통정보조회 (상세정보1)
    9	detailIntro	소개정보조회 (상세정보2)
    10	detailInfo	반복정보조회 (상세정보3)
    11	detailImage	이미지정보조회 (상세정보4)
    12	areaBasedSyncList	국문관광정보 동기화 목록 조회
 */
export const apis = {
    
}

export const apiDefaultParams = {
    'apiKey' : process.env.REACT_APP_TOUR_BASE_URL,
    'MobileOS': 'ETC',
    'MobileApp': 'AppTest',
    '_type': 'json'
}