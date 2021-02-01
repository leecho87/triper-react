/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const CitiesListStyle = css`
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

        img {
            width:100px;
        }

        .text {
            position:absolute;
            left:10px;
            bottom:10px;
            font-weight:bold;
            font-size:13px;
            color:#fff;
        }
    }
`