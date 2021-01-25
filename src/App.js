/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";

function App() {

    console.log(process.env)
console.log(process.env.REACT_APP_TOUR)
console.log(process.env.REACT_APP_PICTURE)
console.log(process.env.REACT_APP_WEATHER)


    return (
        <div className="App">APP</div>
    );
}

export default App;
