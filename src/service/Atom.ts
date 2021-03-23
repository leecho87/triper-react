import { atom } from 'recoil';

export const UserLocation = atom({
    key: "UserLocation",
    default: { latitude : 0, longitude : 0 }
})