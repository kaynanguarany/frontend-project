import React, { Component } from "react";
import { Container, Card, Table } from "react-bootstrap";
import { connect } from "react-redux";
import _ from 'lodash';

import { fetchList } from "../actions/";

class Board extends Component {

  componentDidMount = () => this.props.fetchList();

  render() {
    const { list } = this.props;

    return (
      <Container>
        <Card>
         <Card.Body>
            <Card.Title>100 Most accessed URLs</Card.Title>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Shortened URL</th>
                  <th>Quantity</th>
                </tr>
              </thead>

              <tbody>
                { list.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <td align='center'>
                        <a href={item.destination_url} target='_blank' rel='noopener noreferrer'>
                          {item.destination_url}
                        </a>
                      </td>
                      <td align='center'>
                        <a href={item.url} target='_blank' rel='noopener noreferrer'>{item.url}</a>
                      </td>
                      <td>{item.access_count}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = ({ board }) => {
  return {
    loading: board.loading,
    list: board.list,
    errors: board.errors
  };
};

export default connect(mapStateToProps, { fetchList })(Board);