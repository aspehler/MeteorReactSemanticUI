import React, { Fragment } from 'react';
import { Header, Button } from 'semantic-ui-react'

class Index extends React.Component {
  handleButtonAPI() {
    HTTP.get('https://jsonplaceholder.typicode.com/posts?userId=1', (error, result) => {
      console.log(result)
    });
  }

  render() {
    return (
      <Fragment>
        <Header as='h1'>Home</Header>
        <Button onClick={this.handleButtonAPI}>API Test</Button>
      </Fragment>
    )
  }
}

export default Index;
