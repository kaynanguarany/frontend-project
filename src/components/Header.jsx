import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default class Header extends Component {
  render() {
   return (
     
       <nav className="navbar navbar-expand-lg navbar-light">
        <Container>
          <Link to="/" className='navbar-brand'>
              Home
            </Link>
          <div className="collapse navbar-collapse" id="globalNavbar">
            <ul className="navbar-nav mr-auto order-1">
              <li className="nav-item">
                <Link className="nav-link" to='/board'>100 most accessed URLs</Link>
              </li>
            </ul>
          </div>
        </Container>
     </nav>
    );
  }
}
