import { useState, useEffect } from "react";
import { fetchApi } from "utils/fetchApi";

interface IAreaCodeProps {
    code: string;
    name: string;
    rnum: number;
}

const MainPage = () => {
    const [area, setArea] = useState([]);

    const fetchAreaCode = async () => {
        const data = await fetchApi({
            method: "get",
            url: "/areaCode",
        });
        const { item } = data?.data.response.body.items;
        
        setArea(item);
    }

    useEffect(() => {
        fetchAreaCode();
    }, [])

    return (
        <>
            <h1>MainPage</h1>
            <ul>
                {area?.map((item: IAreaCodeProps) => (
                    <li key={item.code}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}

export default MainPage;