import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default class Header extends Component {
  render() {
   return (
     
       <nav class="navbar navbar-expand-lg navbar-light">
        <Container>
          <Link to="/" className='navbar-brand'>
              Home
            </Link>
          <div class="collapse navbar-collapse" id="globalNavbar">
            <ul class="navbar-nav mr-auto order-1">
              <li class="nav-item">
                <Link className="nav-link" to='/board'>100 most accessed URLs</Link>
              </li>
            </ul>
          </div>
        </Container>
     </nav>
    );
  }
}
