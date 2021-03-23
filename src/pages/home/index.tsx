import React, { useState, useEffect, useCallback } from 'react';
import serviceList, { contentIdList } from '@service/ServiceList';

import fetchAPI from '@pages/home/service';

import { ItemList } from '@components/common'
import { Top, CitiesList } from '@components/home'

import { IGeoLocation, ICitiesItem , ICultureProps, ICourceProps, IFestivalProps } from '@pages/home/interface';

const Home: React.FC = () => {
    // const [ userLocation, setUserLocation ] = useRecoilState<IGeoLocation>({ latitude : 0, longitude : 0 });
    // const [ userLocation, setUserLocation ] = useState<IGeoLocation>({ latitude : 0, longitude : 0 });
    // const getGeoLocation = useCallback(() => {
    //     navigator.geolocation.getCurrentPosition((pos) => {
    //         setUserLocation({
    //             latitude: pos.coords.latitude,
    //             longitude: pos.coords.longitude
    //         });
    //     });
    // }, [])

    const [ cities, setCities ] = useState<ICitiesItem[]>([]);
    const [ attraction, setAttraction ] = useState<any>([]);
    const [ culture, setCulture ] = useState<ICultureProps[]>([]);
    const [ festival, setFestival ] = useState<IFestivalProps[]>([]);
    const [ course, setCourse ] = useState<ICourceProps[]>([]);
    const [ reports, setReports ] = useState<any>([]);
    const [ lodge, setLodge ] = useState<any>([]);

    // const fetchCities = async () => {
    //     const data = await ßfetchAPI(serviceList.areaCode, { numOfRows: 17 })
    //     setCities(data);
    // };
    const fetchAttraction = async () => {
        const data = await fetchAPI(serviceList.areaBasedList, { contentTypeId: contentIdList['attraction'].code} )
        setAttraction(data);
    };
    const fetchCultrue = async () => {
        const data = await fetchAPI(serviceList.areaBasedList, { contentTypeId: contentIdList['culture'].code} )
        setCulture(data);
    };
    const fetchFestival = async () => {
        const data = await fetchAPI(serviceList.areaBasedList, { contentTypeId: contentIdList['festival'].code} )
        setFestival(data);
    };
    const fetchCourse = async () => {
        const data = await fetchAPI(serviceList.areaBasedList, { contentTypeId: contentIdList['course'].code} )
        setCourse(data);
    };
    const fetchReports = async () => {
        const data = await fetchAPI(serviceList.areaBasedList, { contentTypeId: contentIdList['reports'].code} )
        setReports(data);
    };
    const fetchLodge = async () => {
        const data = await fetchAPI(serviceList.areaBasedList, { contentTypeId: contentIdList['lodge'].code} )
        setLodge(data);
    };

    useEffect(() => {
        // getGeoLocation();
        // fetchCities();
        fetchAttraction();
        fetchCultrue();
        fetchFestival();
        fetchCourse();
        fetchReports();
        fetchLodge();
    },[]);

    return (
        <>
            <Top />
            { cities && cities.length > 0 && <CitiesList title={'관심지역 둘러보기'} data={cities} /> }
            { attraction && attraction.length > 0 &&  <ItemList title={'최근에 등록된 관광지'} data={attraction} first={true} type={'swipe'} /> }
            { culture && culture.length > 0 && <ItemList title={'알아가요 우리문화'} data={culture} type={'list'} /> }
            { festival && festival.length > 0 && <ItemList title={'화면으로 행사 구경하기'} data={festival} type={'swipe'} /> }
            { course && course.length > 0 && <ItemList title={'방구석 랜선 여행코스'} data={course} type={'swipe'} /> }
            { reports && reports.length > 0 && <ItemList title={'즐겨봐요 레포츠'} data={reports} type={'list'} /> }
            { lodge && lodge.length > 0 && <ItemList title={'꿀잠행복 숙박정보'} data={lodge} type={'list'} /> }
        </>
    );
}

export default Home;