import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from 'pages/Main';
import GlobalStyle from 'styles/global';

ReactDOM.render(
<Fragment>
  <GlobalStyle />
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Main} />
    </Switch>
  </BrowserRouter>
</Fragment>
,
document.getElementById('root'));
