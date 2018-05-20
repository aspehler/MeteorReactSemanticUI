import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from '../pages/Index';
import APIButton from '../pages/api/APIButton';
import APIUrl from '../pages/api/APIUrl';
import Header from '../components/Header';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Container>
            <Switch>
              <Route exact name="index" path="/" component={Index} />
              <Route name="apibutton" path="/apibutton" component={APIButton} />
              <Route name="apiurl" path="/apiurl/:id" component={APIUrl} />
            </Switch>
          </Container>
        </Fragment>
      </Router>
    );
  }
}

export default App;
