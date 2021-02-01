/** @jsxImportSource @emotion/react */
import { IntroStyle } from './Intro.style';

const Intro:React.FC = () => {
    return (
        <section css={IntroStyle}>
            <h1>TRIPER</h1>
            <p>copyright LEECHO<br />ALL RIGHT RESERVED</p>
            <img src="/images/intro.jpg" alt=""/>
        </section>
    )
}

export default Intro;