import React, { useState, useEffect } from 'react'
import { Map } from '@components/location';

declare global {
    interface Window {
        kakao: any;
    }
}

const Location:React.FC = () => {
    const { kakao } = window;

    const drawMaps = () => {
        const container = document.getElementById('TriperMaps');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
		const map = new kakao.maps.Map(container, options);
    }

    useEffect(() => {
        drawMaps();
    }, []);

    return (
        <div>
            <Map id="TriperMaps" />
        </div>
    )
}

export default Location
