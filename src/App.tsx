/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import "./App.css";
import requestAPI, { requestAll } from './service/Service';
import serviceList, { serviceTypeId } from './service/ServiceList';

import Intro from './components/common/Intro';
import CitiesList from './components/home/CitiesList';
import { isTemplateSpan } from 'typescript';


interface ICitiesItem {
    code: Number;
    name: String;
    rnum: Number;
}

interface IGeoLocation {
    latitude: number;
    longitude: number;
}

const App: React.FC = () => {
    const [ userLocation, setUserLocation ] = useState<IGeoLocation>({ latitude : 0, longitude : 0 });
    const getGeoLocation = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setUserLocation({ 
                latitude: pos.coords.latitude, 
                longitude: pos.coords.longitude
            });
        });        
    }

    const [ cities, setCities ] = useState<ICitiesItem[]>([]);
    const [ attraction, setAttraction ] = useState();
    const [ culture, setCulture ] = useState();
    const [ festival, setFestival ] = useState();
    const [ course, setCourse ] = useState();
    const [ reports, setReports ] = useState();
    const [ lodge, setLodge ] = useState();
    const [ shopping, setShopping ] = useState();
    const [ restaurant, setRestaurant ] = useState();

    const fetchCities = async () => {
        const data = await requestAPI({
            service: serviceList.areaCode,
            param: { numOfRows: 17 }
        });
        const { item } = data.data.response.body.items;
        setCities(item);
    };

    const fetchMainContents = async () => {
        const resAll = await requestAll([
            { service: serviceList.areaBasedList, param: { contentTypeId: 12 } },
            { service: serviceList.areaBasedList, param: { contentTypeId: 14 } },
            { service: serviceList.areaBasedList, param: { contentTypeId: 15 } },
            { service: serviceList.areaBasedList, param: { contentTypeId: 25 } },
            { service: serviceList.areaBasedList, param: { contentTypeId: 28 } },
            { service: serviceList.areaBasedList, param: { contentTypeId: 32 } },
            { service: serviceList.areaBasedList, param: { contentTypeId: 38 } },
            { service: serviceList.areaBasedList, param: { contentTypeId: 39 } },
        ]);

        const resData = setDataId(resAll);

        assignData(resData);
    }

    const setDataId = (data: any) => {
        const dataAll: any = [];
        data.map((item: any) => {
            const id = item.config.params.contentTypeId;
            const { items } = item.data.response.body;
            dataAll.push({...items, id});
        });
        return dataAll;
    }

    const assignData = (data: any) => {
        data && data.map((item: any) => {
            const items = item.item;
            if ( item.id === 12 ) setAttraction(items);
            if ( item.id === 14 ) setCulture(items);
            if ( item.id === 15 ) setFestival(items);
            if ( item.id === 25 ) setCourse(items);
            if ( item.id === 28 ) setReports(items);
            if ( item.id === 32 ) setLodge(items);
            if ( item.id === 38 ) setShopping(items);
            if ( item.id === 39 ) setRestaurant(items);
        });
    };

    useEffect(() => {
        fetchCities();
        fetchMainContents();
        getGeoLocation();
    }, []);


    return (
        <div className="App">
            { cities && cities.length > 0 && <CitiesList data={cities} /> }
        </div>
    );
}

export default App;
