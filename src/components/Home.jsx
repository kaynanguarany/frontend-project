import React, { Component } from 'react';
import { Container, Card, InputGroup, FormControl, Button, Alert, Overlay, Tooltip } from 'react-bootstrap';
import { connect } from 'react-redux';
import _ from 'lodash';

import Header from './Header';
import { urlChanged, sendUrl } from '../actions/';
import './Home.css'

class Home extends Component {
  state = { copySucess: false }

  handleChange = event => this.props.urlChanged(event.target.value);

  copyToClickBoard = () => {
    this.input.select()
    document.execCommand('copy')
    this.setState({copySuccess: true})
  }

  render() {
    const { url, loading, shortened_url, errors, sendUrl } = this.props;

    return (
      <div>
        <Header />
        <Container className='container-sm'>
          <div className='text-center home-title'>
            <h1>URL Shortener</h1>
          </div>
          <Card className='card-input'>
            <Card.Body>
              <Card.Title className='text-center'>Paste the URL to be shortened</Card.Title>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Enter the link here"
                  aria-label="Enter the link here"
                  aria-describedby="basic-addon2"
                  value={url}
                  onChange={this.handleChange}
                />
                <InputGroup.Append>
                  <Button variant="primary" disabled={loading} onClick={sendUrl}>
                    {loading ? 'Loading' : 'Shorten URL'}
                  </Button>
                </InputGroup.Append>
              </InputGroup>
              {
                _.isEmpty(errors)
                ? null
                :
                errors.map((error, idx) =>  <Alert key={idx} variant='danger'>{error}</Alert>)
              }
            </Card.Body>
          </Card>
          {
            _.isEmpty(shortened_url)
            ? null
            :
            <Card className='card-input'>
              <Card.Body>
                <Card.Title className='text-center'>Your shortened URL</Card.Title>
                <InputGroup className="mb-3">
                  <FormControl
                    ref={(input) => this.input = input}
                    aria-describedby="basic-addon2"
                    value={shortened_url.url}
                  />
                  <InputGroup.Append>
                    <Button variant="primary" onClick={this.copyToClickBoard}>Copy URL</Button>
                  </InputGroup.Append>
                  <Overlay show={true} placement="right">
                    {(props) => (
                      <Tooltip id="overlay-example" {...props}>
                        My Tooltip
                      </Tooltip>
                    )}
                  </Overlay>
                </InputGroup>
              </Card.Body>
            </Card>
          }
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ home }) => {
  return {
    loading: home.loading,
    shortened_url: home.shortened_url,
    url: home.url,
    errors: home.errors
  };
};

export default connect(mapStateToProps, { urlChanged, sendUrl })(Home);