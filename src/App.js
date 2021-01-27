/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import Intro from './components/Intro';
import requestAPI from './service/Service';
import serviceList from './service/ServiceList';

function App() {
    requestAPI()

    return (
        <div className="App">
            APP
            <Intro />
        </div>
    );
}

export default App;
