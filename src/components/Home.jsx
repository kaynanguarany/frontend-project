import React, { Component } from "react";
import { Container, Card, InputGroup, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";

import { urlChanged } from "../actions/";

class Home extends Component {
  handleChange = event => this.props.urlChanged(event.target.value);

  render() {
    const { url } = this.props;

    return (
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Paste the URL to be shortened</Card.Title>
            <Card.Text>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Enter the link here"
                  aria-label="Enter the link here"
                  aria-describedby="basic-addon2"
                  value={url}
                  onChange={this.handleChange}
                />
                <InputGroup.Append>
                  <Button variant="primary">Shorten URL</Button>
                </InputGroup.Append>
              </InputGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = ({ home }) => {
  return {
    url: home.url,
    errors: home.errors
  };
};

export default connect(mapStateToProps, { urlChanged })(Home);