import React, { Component } from "react";
import { Container, Card, Table } from "react-bootstrap";
import { connect } from "react-redux";
import _ from 'lodash';

import { searchUrl } from "../actions/";

class UrlLocator extends Component {

  componentDidMount = () => {
    const { urlCode } = this.props.match.params;

    this.props.searchUrl(urlCode);
  }

  render() {
    const { loading, found, shortened_url } = this.props;

    if (loading) { return null }

    if (found) {
      window.location.href = shortened_url.destination_url
      return null
    }

    return (
      <Container>
        <Card>
         <Card.Body>
            <Card.Title>URL not found</Card.Title>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = ({ urlLocator }) => {
  return {
    loading: urlLocator.loading,
    found: urlLocator.found,
    shortened_url: urlLocator.shortened_url
  };
};

export default connect(mapStateToProps, { searchUrl })(UrlLocator);