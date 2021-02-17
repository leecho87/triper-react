import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { RecoilRoot as Recoil } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import media from '@assets/style/media';
import theme from '@assets/style/theme';

ReactDOM.render(
  <Recoil>
    <Router>
      <ThemeProvider theme={{ ...theme, ...media }}>
        <App />
      </ThemeProvider>
    </Router>
  </Recoil>,
  document.getElementById("root")
);