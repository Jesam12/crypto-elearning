// src/App.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import bgImage from "/src/1.png"
import { Button } from 'react-bootstrap';

function Header() {
  //const bgImage = "/1.png";

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <Container className="text-white text-center h-100 d-flex flex-column justify-content-center">
        <h1><span className='text-warning'>"Master the Future of Finance:</span> Learn, Trade, and Grow with Crypto Knowledge."</h1>
        <p className='text-lg-left'>Dive into the future of digital finance with expert-guided lessons, real-time market insights, and hands-on tutorials. Whether you're a beginner or an experienced trader, our platform equips you with the knowledge and tools to thrive in the ever-evolving world of cryptocurrency.</p>

        <div className='button' style={{
            padding:"70px"
        }
        }>
        <Button variant="warning text-white">  Ready? Let's Proceed!</Button>
        </div>
      </Container>
    </div>
  );
}

export default Header;
