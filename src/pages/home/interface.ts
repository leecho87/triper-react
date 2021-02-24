interface IGeoLocation {
    latitude: number;
    longitude: number;
}

interface ICitiesItem {
    code: Number;
    name: String;
    rnum: Number;
}

interface ICultureProps {
    addr1: string;
    addr2: string;
    areacode: number;
    cat1: string;
    cat2: string;
    cat3: string;
    contentid: number;
    contenttypeid: number;
    createdtime: number;
    firstimage: string;
    firstimage2: string;
    mapx: number;
    mapy: number;
    mlevel: number;
    modifiedtime: number;
    readcount: number;
    sigungucode: number;
    title: string;
    zipcode: string;
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

interface IFestivalProps {
    addr1: string;
    addr2: string;
    areacode: number;
    cat1: string;
    cat2: string;
    cat3: string;
    contentid: number;
    contenttypeid: number;
    createdtime: number;
    firstimage: string;
    firstimage2: string;
    mapx: number;
    mapy: number;
    mlevel: number;
    modifiedtime: number;
    readcount: number;
    sigungucode: number;
    tel: string;
    title: string;
    zipcode: number;
}


export type {
    IGeoLocation,
    ICitiesItem,
    ICourceProps,
    ICultureProps,
    IFestivalProps
}