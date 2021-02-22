import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import requestAPI, { requestAll } from '@service/Service';
import serviceList, { contentIdList } from '@service/ServiceList';

import { ItemList } from '@components/common'
import { CitiesList } from '@components/home'

interface IGeoLocation {
    latitude: number;
    longitude: number;
}

interface ICitiesItem {
    code: Number;
    name: String;
    rnum: Number;
}

interface ICourceProps {
    areacode: number;
    cat1: string;
    cat2: string;
    cat3: string;
    contentid: number;
    contenttypeid: number;
    createdtime: number;
    firstimage:string;
    firstimage2:string;
    mapx: number;
    mapy: number;
    mlevel: number;
    modifiedtime: number;
    readcount: number;
    sigungucode: number;
    title:string;
}

const Home: React.FC = () => {
    // const [ userLocation, setUserLocation ] = useState<IGeoLocation>({ latitude : 0, longitude : 0 });
    // const getGeoLocation = () => {
    //     navigator.geolocation.getCurrentPosition((pos) => {
    //         setUserLocation({
    //             latitude: pos.coords.latitude,
    //             longitude: pos.coords.longitude
    //         });
    //     });
    // }

    const [ cities, setCities ] = useState<ICitiesItem[]>([]);
    const [ course, setCourse ] = useState<ICourceProps[]>([]);
    const [ attraction, setAttraction ] = useState<any>([]);
    // const [ mainItems, setMainItems ] = useState({});

    const fetchCities = async () => {
        const data = await requestAPI({
            service: serviceList.areaCode,
            param: { numOfRows: 17 }
        });
        const { item } = data.data.response.body.items;
        setCities(item);
    };

    const fetchAttraction = async () => {
        const data = await requestAPI({
            service: serviceList.areaBasedList,
            param: { contentTypeId: 12 }
        });
        const { item } = data.data.response.body.items;
        setAttraction(item);
    };

    const fetchCourse = async () => {
        const data = await requestAPI({
            service: serviceList.areaBasedList,
            param: { contentTypeId: 25 }
        });
        const { item } = data.data.response.body.items;
        setCourse(item);
    };

    // const fetchMainContents = async () => {
    //     const resAll = await requestAll([
    //         { service: serviceList.areaBasedList, param: { contentTypeId: 12 } },
    //         // { service: serviceList.areaBasedList, param: { contentTypeId: 14 } },
    //         // { service: serviceList.areaBasedList, param: { contentTypeId: 15 } },
    //         // { service: serviceList.areaBasedList, param: { contentTypeId: 25 } },
    //         // { service: serviceList.areaBasedList, param: { contentTypeId: 28 } },
    //         // { service: serviceList.areaBasedList, param: { contentTypeId: 32 } },
    //         // { service: serviceList.areaBasedList, param: { contentTypeId: 38 } },
    //         // { service: serviceList.areaBasedList, param: { contentTypeId: 39 } }
    //     ]);

    //     const resData = setDataNameAdd(resAll);
    // }

    // const setDataNameAdd = (data: any) => {
    //     const mergeData:{[key: string]: any} = {};

    //     data.forEach((items: any) => {
    //         const id = items.config.params.contentTypeId.toString();
    //         const contentCode = contentIdList[id].contentCode;

    //         console.log('forEach / id ', id)
    //         console.log('forEach / contentCode ', contentCode)
    //         console.log('forEach / contentCode ', items)
    //         // const { item } = items.data.response.body.items;
    //         // console.log('forEach / item ', item)
    //         // return mergeData[contentCode] = item;
    //     });

    //     setMainItems(mergeData);
    // }

    useEffect(() => {
        fetchCities();
        fetchAttraction();
        fetchCourse();
        // fetchMainContents();
        // getGeoLocation();
    },[]);

    return (
        <>
            { cities && cities.length > 0 && <CitiesList title={'관심지역 둘러보기'} data={cities} /> }

            <ItemList title={'최근 즐거운 관광지'} data={attraction} />

            <ItemList title={'방구석 랜선 여행코스'} data={course} />
        </>
    );
}

export default Home;