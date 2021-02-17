import styled from 'styled-components';
import classNames from 'classnames';

interface ICitiesItem {
    code: Number;
    name: String;
    rnum: Number;
}

interface IProps {
    data?: ICitiesItem[]
}

const CitiesListWrapper = styled.section`
    position:relative;
    display:flex;
    flex-wrap:no-wrap;
    overflow-x:auto;
    overflow-y:hidden;
    padding:15px;
    &:after {
        content:'';
        padding-left:12px;
    }

    button {
        position:relative;
        overflow:hidden;
        flex:0 0 auto;
        margin-left:12px;
        border-radius:4px;

        &:first-of-type {
            margin-left:0;
        }

        &.active {            
            img {
                opacity:1;
            }
        }

        img {
            width:120px;
            opacity:.7;
        }

        .text {
            position:absolute;
            left:10px;
            bottom:10px;
            font-weight:bold;
            font-size:14px;
            color:#fff;
        }
    }
`

const CitiesList: React.FC<IProps> = ({
    data
}) => {
    return (
        <CitiesListWrapper>
            { data && data.length > 0 && data.map((item: ICitiesItem, index: number) => (
                <button type="button" key={`citeis_${index}`} className={index === 0 ? 'active' : undefined}>
                    <img src={`/images/cities/city_${item.code}.jpg`} alt={`${item.name === '세종특별자치시' ? '세종시' : item.name}`} />
                    <span className="text">{item.name === '세종특별자치시' ? '세종시' : item.name}</span>
                </button>
            )) }
        </CitiesListWrapper>
    )
}

export default CitiesList;