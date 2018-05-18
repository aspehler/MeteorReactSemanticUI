import React, { Fragment } from 'react';
import { Header, Button } from 'semantic-ui-react'

class APIUrl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      data: []
    }
  }

  componentDidMount () {
    HTTP.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.id}`, (error, result) => {
      this.setState({data: result.data})
    });
  }

  render() {
    return (
      <Fragment>
        <Header as='h1'>API Call via URL: {this.state.id}</Header>
        {(this.state.data[0]) &&
          <Header as='h3'>{this.state.data[0].title}</Header>
        }
      </Fragment>
    )
  }
}

export default APIUrl;
