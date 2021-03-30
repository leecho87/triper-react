import { atom } from 'recoil';

export const GeoLocationState = atom({
    key: "GeoLocationState",
    default: { latitude : 0, longitude : 0 }
});