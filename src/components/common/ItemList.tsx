import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

import { ArticleTitle } from '@components/common';
import classNames from "classnames";

interface IItemListProps {
    title?: string;
    data?: any;
    first?: boolean;
    type?: string;
    search?: boolean;
    searchingState?: boolean;
}

const ItemListWrapper = styled.article`
    position:relative;
    margin-top:30px;
    border-top:10px solid #f7f7f7;
    padding:25px 0 0;
    &.first {
        margin-top:25px;
    }
    &.search {
        border-top:0 none;
        padding:0;
        margin:0;
    }

    .listArea {
        display:flex;
        flex-wrap:no-wrap;
        overflow-x: auto;
        overflow-y: hidden;
        position:relative;
        padding:20px 15px 0;

        &::-webkit-scrollbar {
            display:none;
        }
        &:after {
            content: "";
            padding-left: 15px;
        }
        .item {
            background-color:#fff;

            &:not(:first-of-type) {
                margin-left:12px;
            }

            .thumb {
                img {
                    min-width:180px;
                    height:120px;
                    border-radius:8px;
                }
                .dummy {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    min-width:180px;
                    height:120px;
                    border-radius:8px;
                    line-height:1.8;
                    text-align:center;
                    color:#fff;
                    background-color:#bbb;
                }
            }
            .text {
                padding:6px 0 4px;
                .title {
                    overflow:hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    height:42px;
                    font-size:14px;
                    line-height:1.5;
                }
                .address {
                    font-size:12px;
                    color:#999;
                }
                .read {
                    padding:4px 0 0;
                    font-size:12px;
                    color:#999;
                    img {
                        width:16px;
                        height:16px;
                        margin-right:2px;
                    }
                }
            }
        }

        &.list {
            display:block;
            padding:20px 15px;

            .item {
                display:flex;
                align-items:center;
                margin:12px 0 0;
                .thumb {
                    margin-right:10px;
                    width:100px;
                    img, .dummy {
                        min-width:unset;
                        width:100%;
                        height:80px;
                    }
                }
                .text {
                    .title {
                        height:auto;
                    }
                }
            }
        }
    }

    .more {
        position:absolute;
        top:19px;
        right:15px;
        font-size:13px;
        color:#888;
        &:after {
            content:'';
            display:inline-block;
            width:5px;
            height:5px;
            margin:5px 0 0 4px;
            border-top:1px solid #888;
            border-right:1px solid #888;
            transform:rotate(45deg);
            vertical-align:top;
        }
    }

    .none {
        display:flex;
        width:100%;
        height:calc(100vh - 138px);
        flex-direction:column;
        justify-content:center;
        p {
            text-align:center;
            font-size:18px;
            line-height:1.8;
            letter-spacing:-1.5px;
        }
    }
`

const ItemList: React.FC<IItemListProps> = ({
    title, data, first=false, type = 'swipe', search=false, searchingState=false
}) => {
    return (
        <ItemListWrapper className={classNames([first && 'first', search && 'search'])}>
            { data && data.length > 0 ? (
                <>
                <ArticleTitle>
                    {title}
                    <Link to="/" className="more">자세히</Link>
                </ArticleTitle>
                <div className={classNames(["listArea", type])}>
                    {data.map((item:any, index:number) => (
                        <div key={index} className="item">
                            <div className="thumb">
                                { item.firstimage
                                    ? ( <img src={item.firstimage} alt={item.title} /> )
                                    : ( <span className="dummy"><strong>image<br />not found</strong></span> )
                                }
                            </div>
                            <div className="text">
                                <p className="title">{item.title}</p>
                                { item.addr1 && <p className="address">{item.addr1}</p>}
                            </div>
                        </div>
                    ))}
                </div>
                </>
            ) : (
                <div className="none">
                    { searchingState ? (
                        <p>검색어를 입력해주세요</p>
                    ): (
                        <p>검색어가 없거나 올바르지 않습니다</p>
                    )}

                </div>
            )}
        </ItemListWrapper>
    );
};

export default ItemList;