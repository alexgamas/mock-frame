import React, { useState, useEffect } from 'react';
import './App.css';
import { getTokens } from './service';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


// import React, { useState,  } from 'react';


const { Brand, Toggle, Collapse } = Navbar;
const { Item } = NavDropdown;



const handleMenuClick = (e) => {
  console.log(e);
}


const App = () => {

  const [tokens, setTokens] = useState([]);


  useEffect(() => {
    getTokens().then(el => {
      setTokens(el);
    });
  }, []);




  return (
    <Container fluid>

      <header>
        <Navbar bg="dark" variant="dark">
          <Brand href="/#/home">
            Mock Frame
          </Brand>

          <Toggle aria-controls="basic-navbar-nav" />
          <Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Chose a Token" id="basic-nav-dropdown">
                {tokens && tokens.map((t, k) =>
                  // {id, url, token, title}
                  <Item key={k} onSelect={handleMenuClick(t)} >{t.title} {k}</Item>
                )}
              </NavDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </header>

      {/* <iframe title="frame" src="http://uol.com.br" frameborder="0" className="frame"></iframe> */}

    </Container>

  );
}

export default App;
