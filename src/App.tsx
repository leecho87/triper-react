/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import "./App.css";
import requestAPI, { requestAll } from './service/Service';
import serviceList from './service/ServiceList';

import Intro from './components/common/Intro';
import CitiesList from './components/home/CitiesList';


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
    const [ cities, setCities ] = useState<ICitiesItem[]>([]);

    const fetchCities = async () => {
        const data = await requestAPI({
            service: serviceList.areaCode,
            param: { numOfRows: 17 }
        });
        const { item } = data.data.response.body.items;
        setCities(item);
    };

    const fetchContents = async () => {
        const dataAll = await requestAll([
            {
                service: serviceList.areaBasedList,
                param: { contentTypeId: 12 }
            },
            {
                service: serviceList.areaBasedList,
                param: { contentTypeId: 15 }
            }
        ]);
        console.log(dataAll);
    }

    const getGeoLocation = () => {
        navigator.geolocation.getCurrentPosition(function(pos) {
            setUserLocation({ 
                latitude: pos.coords.latitude, 
                longitude: pos.coords.longitude
            });
        });        
    }

    useEffect(() => {
        fetchCities();
        fetchContents();
        getGeoLocation();
    }, []);

    return (
        <div className="App">
            { cities && cities.length > 0 && <CitiesList data={cities} /> }
        </div>
    );
}

export default App;
