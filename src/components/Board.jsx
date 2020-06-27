import React, { Component } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { connect } from 'react-redux';

import Header from './Header';
import { fetchList } from '../actions/';
import './Board.css'

class Board extends Component {

  componentDidMount = () => this.props.fetchList();

  renderContent = () => {
    const { loading, list } = this.props;

    if (loading) {
      return (
        <div className='text-center'>
          <Spinner animation="border" variant="primary" />
        </div>
      )
    }

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Shortened URL</th>
            <th>URL</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          { list.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <a href={item.url} target='_blank' rel='noopener noreferrer'>{item.url}</a>
                </td>
                <td>
                  <a href={item.destination_url} target='_blank' rel='noopener noreferrer'>
                    {item.destination_url}
                  </a>
                </td>
                <td>{item.access_count}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }

  render() {
   
    return (
      <div>
        <Header />
        <Container>
          <div className='text-center board-title'>
            <h2>100 most frequently accessed URLs</h2>
          </div>
          {this.renderContent()}
        </Container>
      </div>
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