import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MemberWrapper = styled.section`
    position:relative;
    height:100%;
    padding:0 30px;

    .textBox {
        padding:50px 0;
        line-height:1.5;
        h2 {
            font-weight:bold;
            font-size:24px;
        }
        p {
            margin-top:8px;
            font-size:14px;
            color:gray;
        }
    }
    
    .loginArea {}
`

const Member: React.FC = ({ isLoggedIn }: any) => {
    return (
        <MemberWrapper>
            <div className="textBox">
                <h2>손 안의 여행가이드, Triper</h2>
                <p>회원가입/로그인 하고 회원전용 메뉴를 이용하세요.</p>
            </div>
            <div className="loginArea">
                <div className="social">
                    <button type="button" className="google">Google</button>
                    <button type="button" className="github">GitHub</button>
                </div>
                <div className="email">
                    <form>
                        <input type="text" placeholder="이메일주소를 입력하세요" />
                        <input type="password" placeholder="비밀번호를 입력하세요" />
                        <button type="submit">로그인</button>
                    </form>
                </div>
            </div>
            <p>아직 회원이 아니신가요?</p>
            <Link to="/signup">회원가입</Link>
        </MemberWrapper>
    )
}

export default Member;