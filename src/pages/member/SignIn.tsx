import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const MemberWrapper = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:100%;
    padding:0 30px;
    background-color:#34628e;
    color:#fff;

    .backBtn {
        position:absolute;
        left:0;
        top:0;
        width:60px;
        height:60px;
        span {
            position:absolute;
            left:50%;
            top:50%;
            width:16px;
            height:16px;
            margin:-8px 0 0 -6px;
            border-top:1px solid #fff;
            border-left:1px solid #fff;
            font-size:0;
            line-height:0;
            color:transparent;
            transform:rotate(-45deg);
        }
    }

    h1 {
        padding:0 0 30px;
        text-align:left;
        font-size:32px;
    }

    form {
        label {
            display:block;
            padding:20px 0 10px;
            font-size:13px;
        }
        input {
            border:0 none;
            border-radius:4px;
            font-size:16px;
            color:#000;
            &::placeholder {
                font-size:14px;
                color:#ccc;
            }
        }
        [type=submit] {
            width:100%;
            margin-top:30px;
            padding:12px 0;
            border:1px solid #fff;
            border-radius:4px;
            font-weight:bold;
            font-size:16px;
            letter-spacing:-.05em;
            color:#fff;
        }
    }
    .findPw {
        margin-top:50px;
        text-align:center;
        a {
            font-size:13px;
            color:#fff;
        }
    }
`;

const SignIn: React.FC = () => {
    const history = useHistory();
    const [ login, setLogin ] = useState({
        userId:'', userPassword: ''
    })
    const onClickBack = () => {
        if (history.length > 2) {
            history.goBack();
        } else {
            history.push('/');
        }
    };

    const onChange = (event: any) => {
        const { target: { value, name } } = event;

        if ( name === 'userId' ) {
            setLogin({ ...login, userId: value })
        } else if ( name === 'userPassword' ) {
            setLogin({ ...login, userPassword: value })
        };
    }

    const onSubmit = (event: any) => {
        event.preventDefault();
        const { userId: id, userPassword: pw } = login;
        console.log('onsubmit id', id);
        console.log('onsubmit pw', pw);
    }

    return (
        <MemberWrapper>
            <button type="button" className="backBtn" onClick={onClickBack}><span>뒤로가기</span></button>
            <h1>이메일로 로그인</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="userId">이메일</label>
                <input type="text" id="userId" name="userId" placeholder="triper@triper.com" value={login.userId} onChange={onChange} />
                <label htmlFor="userPassword">비밀번호</label>
                <input type="password" id="userPassword" name="userPassword" placeholder="영어,숫자,특수문자" value={login.userPassword} onChange={onChange} />
                <button type="submit">로그인</button>
            </form>
            <div className="findPw">
                <Link to="">비밀번호를 잃어버렸어요</Link>
            </div>
        </MemberWrapper>
    )
}

export default SignIn;