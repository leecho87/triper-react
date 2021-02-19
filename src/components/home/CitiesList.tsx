import styled from "styled-components";
import { ArticleTitle } from "@components/common";

interface ICitiesItem {
    code: Number;
    name: String;
    rnum: Number;
}

interface IProps {
    title?: string;
    data?: ICitiesItem[];
}

const CitiesListWrapper = styled.article`
    .citiesItems {
        position: relative;
        display: flex;
        flex-wrap: no-wrap;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 15px;
        &:after {
            content: "";
            padding-left: 12px;
        }
        &::-webkit-scrollbar {
            display: none;
        }

        button {
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            margin-left: 12px;
            border-radius: 50%;
            opacity: 0.5;

            &:first-of-type {
                margin-left: 0;
            }

            &.active {
                opacity: 1;
            }

            img {
                width: 80px;
            }

            .text {
                position: absolute;
                left: 50%;
                top: 50%;
                margin-top: 15px;
                font-weight: bold;
                font-size: 14px;
                transform: translate(-50%, -50%);
                white-space: nowrap;
                text-shadow: 1px 1px 2px #000;
                color: #fff;
            }
        }
    }
`;

const CitiesList: React.FC<IProps> = ({ title, data }) => {
    return (
        <CitiesListWrapper>
            <ArticleTitle color={'#000'}>{title}</ArticleTitle>
            <div className="citiesItems">
                {data &&
                    data.length > 0 &&
                    data.map((item: ICitiesItem, index: number) => (
                        <button type="button" key={`citeis_${index}`} className={index === 0 ? "active" : undefined}>
                            <img
                                src={`/images/home/cities/city_${item.code}.jpg`}
                                alt={`${item.name === "세종특별자치시" ? "세종시" : item.name }`}
                            />
                            <span className="text">
                                {item.name === "세종특별자치시" ? "세종시" : item.name}
                            </span>
                        </button>
                    ))}
            </div>
        </CitiesListWrapper>
    );
};

export default CitiesList;
