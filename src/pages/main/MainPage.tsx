import { useState, useEffect } from "react";
import { useMain } from "hooks/main/useMain";

interface IAreaCodeProps {
    code: string;
    name: string;
    rnum: number;
}

const MainPage = () => {
    const [areaCode, setAreaCode] = useState(null);
    const controller = useMain();


    const handleGetAreaCode = async () => {
        const items = await controller.fetchAreaCode();
        console.log('[handleGetAreaCode]', items)
    }

    useEffect(() => {
        handleGetAreaCode();
    }, [])

    return (
        <>
            <p>main</p>
        </>
    )
}

export default MainPage;