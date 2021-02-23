import React, {useState} from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const MenusWrapper = styled.div`
    .toggleBtn {
        position:absolute;
        right:20px;
        top:33px;
        width:30px;
        height:2px;
        font-size:0;
        line-height:0;
        color:trasparent;
        background-color:#fff;
        &:before {
            content:'';
            position:absolute;
            top:-8px;
            left:0;
            width:100%;
            height:2px;
            background-color:#fff;
        }
        &:after {
            content:'';
            position:absolute;
            bottom:-8px;
            left:0;
            width:100%;
            height:2px;
            background-color:#fff;
        }
    }

    .filter {
        z-index:950;
        display:none;
        position:fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        width:100%;
        height:100%;
        background-color:#000;
        opacity:.5;
    }

    .menuArea {
        z-index:1000;
        position:fixed;
        right:-100%;
        top:0;
        width:70%;
        height:100%;
        background-color:#fff;
        box-shadow:-2px 0 4px 0 rgba(255, 255, 255, .5);
        opacity:0;
        transition:all .3s;
        &.active {
            right:0;
            opacity:1;
            & + .filter {
                display:block;
            }
        }

        .closeBtn {
            position:absolute;
            right:20px;
            top:20px;
            width:24px;
            height:24px;
            font-size:0;
            line-height:0;
            color:transparent;
            &:before {
                content:'';
                position:absolute;
                left:0;
                top:50%;
                width:100%;
                height:2px;
                background-color:#000;
                transform:rotate(-45deg);
            }
            &:after {
                content:'';
                position:absolute;
                left:0;
                top:50%;
                width:100%;
                height:2px;
                background-color:#000;
                transform:rotate(45deg);
            }
        }
    }
`

const Menus:React.FC = () => {
    const [ toggleMenu , setToggleMenu ] = useState<boolean>(false);

    const toggleMenuHandler = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
        <MenusWrapper>
            <button type="button" className="toggleBtn" onClick={() => toggleMenuHandler()}>메뉴토글</button>
            <div className={classnames(["menuArea", toggleMenu && "active"])}>
                <button type="button" onClick={() => toggleMenuHandler()} className="closeBtn">닫기</button>
            </div>
            <div className="filter" onClick={() => toggleMenuHandler()}></div>
        </MenusWrapper>
    )
}

export default Menus;