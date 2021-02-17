/** @jsxImportSource @emotion/react */
import { CitiesListStyle } from './CitiesList.style';
import classNames from 'classnames';

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
                <button type="button" key={`citeis_${index}`} className={index === 0 ? 'active' : undefined}>
                    <img src={`/images/cities/city_${item.code}.jpg`} alt={`${item.name === '세종특별자치시' ? '세종시' : item.name}`} />
                    <span className="text">{item.name === '세종특별자치시' ? '세종시' : item.name}</span>
                </button>
            )) }
        </section>
    )
}

export default CitiesList;