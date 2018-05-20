import React, { Fragment } from 'react';
import { Header, Button } from 'semantic-ui-react';

class APIButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextUserId: 1,
      data: [],
    };
  }

  handleButtonAPI = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.nextUserId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          nextUserId: this.state.nextUserId + 1,
          data,
        });
      });
  };

  render() {
    return (
      <Fragment>
        <Header as="h1">API Call via Button</Header>
        <Button onClick={this.handleButtonAPI}>API Test</Button>
        {this.state.data[0] && <Header as="h3">{this.state.data[0].title}</Header>}
      </Fragment>
    );
  }
}

export default APIButton;
