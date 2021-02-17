import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import requestAPI, { requestAll } from '@service/Service';
import serviceList, { contentIdList } from '@service/ServiceList';

import CitiesList from '@components/home/CitiesList';

interface ICitiesItem {
    code: Number;
    name: String;
    rnum: Number;
}

interface IGeoLocation {
    latitude: number;
    longitude: number;
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

    // const [ cities, setCities ] = useState<ICitiesItem[]>([]);
    // const [ mainItems, setMainItems ] = useState({});

    // const fetchCities = async () => {
    //     const data = await requestAPI({
    //         service: serviceList.areaCode,
    //         param: { numOfRows: 17 }
    //     });
    //     const { item } = data.data.response.body.items;
    //     setCities(item);
    // };

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

    // useEffect(() => {
    //     fetchCities();
    //     fetchMainContents();
    //     getGeoLocation();
    // },[]);

    return (
        <div className="App">
            Home
            {/* { cities && cities.length > 0 && <CitiesList data={cities} /> } */}
        </div>
    );
}

export default Home;