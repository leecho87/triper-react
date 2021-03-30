import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const MemberWrapper = styled.section`
    position:relative;
    height:100%;
    h1 {
        text-align:center;
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
            <div className="head">
                <button type="button" onClick={onClickBack}>뒤로가기</button>
                <h1>로그인</h1>
            </div>
            <form onSubmit={onSubmit}>
                <input type="text" name="userId" placeholder="이메일을 입력해 주세요" value={login.userId} onChange={onChange} />
                <input type="password" name="userPassword" placeholder="비밀번호를 입력해 주세요" value={login.userPassword} onChange={onChange} />
                <button type="submit">로그인</button>
            </form>
            <div className="find">
                <Link to="">비밀번호를 잃어버렸어요</Link>
            </div>
            <div className="social">
                <Link to="" className="loginGitHub">
                    <img src="/images/icon_github.png" alt="Github 계정으로 로그인" width="30" />
                </Link>
                <Link to="" className="loginGoogle">
                    <img src="/images/icon_google.png" alt="Google 계정으로 로그인" width="30" />
                </Link>
            </div>
        </MemberWrapper>
    )
}

export default SignIn;