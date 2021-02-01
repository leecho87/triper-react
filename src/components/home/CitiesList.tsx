/** @jsxImportSource @emotion/react */
import { CitiesListStyle } from './CitiesList.style';

interface ICitiesItem {
    code: Number;
    name: String;
    rnum: Number;
}

interface IProps {
    data?: ICitiesItem[]
}

const CitiesList: React.FC<IProps> = ({
    data
}) => {
    return (
        <section css={CitiesListStyle}>
            { data && data.length > 0 && data.map((item: ICitiesItem, index: number) => (
                <button type="button" key={`citeis_${index}`}>
                    <img src={`/images/cities/city_${item.code}.jpg`} alt={`${item.name}`} />
                    <span className="text">{item.name}</span>
                </button>
            )) }
        </section>
    )
}

export default CitiesList;