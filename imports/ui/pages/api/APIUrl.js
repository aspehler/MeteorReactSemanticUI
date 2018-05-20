import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

class APIUrl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      data: [],
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      });
  }

  render() {
    return (
      <Fragment>
        <Header as="h1">API Call via URL: {this.state.id}</Header>
        {this.state.data[0] && <Header as="h3">{this.state.data[0].title}</Header>}
      </Fragment>
    );
  }
}

APIUrl.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

APIUrl.defaultProps = {
  match: {
    params: {
      id: '1',
    },
  },
};

export default APIUrl;
