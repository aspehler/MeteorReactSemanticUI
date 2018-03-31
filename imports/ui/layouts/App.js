import React, { Fragment } from 'react'
import { Container } from 'semantic-ui-react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import Index from '../pages/Index';
import Other from '../pages/Other';
import Header from '../components/Header'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Container>
            <Switch>
              <Route exact name="index" path="/" component={Index} />
              <Route name="other" path="/other" component={Other} />
            </Switch>
          </Container>
        </Fragment>
      </Router>
    );
  }
}

export default App;
