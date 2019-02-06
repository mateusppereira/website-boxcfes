import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from 'pages/Main';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';

const theme = {
  colors: {
    dark: '#333',
    darker: '#2C2E2F',
    light: '#bbb', 
    lighter: '#ddd', 
    green: '#36996F',
  },
  metrics: {
    margin: '5px',
    padding: '10px',
  }
}

ReactDOM.render(
<Fragment>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Main} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
</Fragment>
,
document.getElementById('root'));
