import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MemberWrapper = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100%;
    background-color:#34628e;

    .textBox {
        width:100%;
        padding:50px 30px 30px;
        line-height:1.5;
        color:#fff;
        h2 {
            font-weight:bold;
            font-size:36px;
            line-height:42px;
            letter-spacing:-.05em;
        }
        p {
            margin-top:8px;
            font-size:14px;
        }
    }

    .btnArea {
        width:100%;
        text-align:center;
        .noLogin {
            display:inline-block;
            padding:8px 12px;
            border-radius:6px;
            border:1px solid #fff;
            color:#fff;
        }
        .socialRow {
            margin:20px 0;
            button {
                padding:6px;
                margin:0 10px;
                border-radius:50%;
                background-color:#fff;
            }
        }
        .sign {
            color:#fff;
            a {
                display:inline-block;
                margin:0 8px;
                font-size:13px;
                vertical-align:middle;
                color:inherit;
            }
            span {
                display:inline-block;
                width:1px;
                height:8px;
                margin-top:2px;
                vertical-align:middle;
                background-color:#fff;
            }
        }
    }
`

const Member: React.FC = ({ isLoggedIn }: any) => {
    return (
        <MemberWrapper>
            <div className="textBox">
                <h2>주머니 속 여행가이드<br />TRIPER</h2>
                <p>회원가입 또는 로그인 후<br />회원전용 메뉴를 이용하세요.</p>
            </div>
            <div className="btnArea">
                <Link to="/" className="noLogin">회원가입 없이 이용하기</Link>
                <div className="socialRow">
                    <button><img src="/images/icon_google.png" alt="" width="40" /></button>
                    <button><img src="/images/icon_github.png" alt="" width="40" /></button>
                </div>
                <div className="sign">
                    <Link to="/signin">이메일로 로그인</Link><span></span><Link to="/signup">회원가입</Link>
                </div>
            </div>
            {/* <div className="loginArea">
                <button type="button" className="socialBtn">
                    <img src="/images/icon_google.png" alt="Google" width="30" /> Google 계정으로 로그인하기
                </button>
                <button type="button" className="socialBtn">
                    <img src="/images/icon_github.png" alt="Github" width="30" /> Github 계정으로 로그인하기
                </button>
                <div className="email">
                    <form>
                        <input type="text" placeholder="이메일주소를 입력하세요" />
                        <input type="password" placeholder="비밀번호를 입력하세요" />
                        <button type="submit">로그인</button>
                    </form>
                </div>
            </div>
            <p>아직 회원이 아니신가요?</p>
            <Link to="/signup">회원가입</Link> */}
        </MemberWrapper>
    )
}

export default Member;