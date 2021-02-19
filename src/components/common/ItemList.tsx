import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

import { ArticleTitle } from '@components/common';

interface IItemListProps {
    title?: string;
    data?: any;
}

interface IItemListStyleProps {
    bgCode: number
}

const ItemListWrapper = styled.article<IItemListStyleProps>`
    position:relative;

    // &:before {
    //     content:'';
    //     z-index:-1;
    //     position:absolute;
    //     top:0;
    //     right:0;
    //     bottom:0;
    //     left:0;
    //     background-image:${props => `url(/images/home/bg_${props.bgCode}.png)`};
    //     background-size:cover;
    // }

    .listBox {
        display:flex;
        flex-wrap:no-wrap;
        position:relative;
        overflow-x: auto;
        overflow-y: hidden;
        padding:20px 15px 40px;
        &::-webkit-scrollbar {
            display:none;
        }
        &:after {
            content: "";
            padding-left: 15px;
        }

        .item {
            flex:1;
            padding:6px;
            box-shadow:2px 2px 4px 0 rgba(0, 0, 0, .2);
            &:not(:first-of-type) {
                margin-left:12px;
            }
            img {
                width:180px;
                height:120px;
                border-radius:8px;
            }
            .dummy {
                display:flex;
                justify-content:center;
                align-items:center;
                width:180px;
                height:120px;
                border-radius:8px;
                line-height:1.8;
                text-align:center;
                color:#fff;
                background-color:#bbb;
            }
            .title {
                padding:6px 0 4px;
                font-size:14px;
                line-height:1.5;
            }

            .read {
                text-align:right;
                font-size:12px;
                img {
                    width:16px;
                    height:16px;
                    margin-left:6px;
                }
            }
        }
    }

    .more {
        position:absolute;
        right:15px;
        top:18px;
        font-size:13px;
        color:#999;
    }
`

const ItemList: React.FC<IItemListProps> = ({ title, data }) => {
    console.log('itemList', data);

    return (
        <ItemListWrapper bgCode={data[0]?.contenttypeid}>
            <ArticleTitle>{title}</ArticleTitle>
            <div className="listArea">
                <div className="listBox">
                { data && data.length > 0 && data.map((item:any, index:number) => (
                    <div key={index} className="item">
                        { item.firstimage ? (
                            <img src={item.firstimage} />
                        ) : (
                            <span className="dummy"><strong>image<br />not found</strong></span>
                        )}
                        <p className="title">{item.title}</p>
                        <p className="read">
                            {item.readcount} <img src="/images/common/read.png" alt=""/>
                        </p>
                    </div>
                ))}
                </div>
            </div>
            <Link to="/" className="more">자세히보기</Link>
        </ItemListWrapper>
    );
};

export default ItemList;