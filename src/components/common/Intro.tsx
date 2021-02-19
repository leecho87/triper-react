import styled from "styled-components";

const IntroWrapper = styled.section`
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;

    h1 {
        position: fixed;
        left: 10%;
        top: 10%;
        font-size: 42px;
        color: #fff;
        text-shadow: 1px 1px 1px gray;
        font-family: "Fredoka One";
    }

    p {
        position: fixed;
        left: 0;
        bottom: 20px;
        width: 100%;
        font-size: 12px;
        text-align: center;
        line-height: 1.5;
        color: #fff;
        text-shadow: 1px 1px 1px gray;
        font-family: "Fredoka One";
    }

    img {
        width: auto;
        height: 100%;
        object-fit: contain;
        vertical-align: top;
    }
`;

const Intro: React.FC = () => {
    return (
        <IntroWrapper>
            <h1>TRIPER</h1>
            <p>
                copyright LEECHO
                <br />
                ALL RIGHT RESERVED
            </p>
            <img src="/images/intro.jpg" alt="" />
        </IntroWrapper>
    );
};

export default Intro;
