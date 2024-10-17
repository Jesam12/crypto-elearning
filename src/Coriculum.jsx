import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './index.css'

const Coriculum = () => {
  return (
    <div className='text-light p-5 curri'>
       <div className="about__content">
              <h2 className="mt-sm-5 fw-bold text-center ">Crypto curriculum</h2>
        </div>      
        <Container className='mt-5'>
            <Row>
                <Col lg="6" md="6">
                    <div>
                        <h3> 1. Introduction to Cryptocurrency</h3>

                          <p>a. History and evolution of cryptocurrencies</p>
                          <p>b. Overview of popular cryptocurrencies (e.g., Bitcoin, Ethereum, Cardano)</p>
                          <p>c. Differences between cryptocurrencies and traditional financial systems</p>

                          <h3>2. Blockchain Technology Basics</h3>

                          <p>a. Understanding blockchain and distributed ledgers</p>
                          <p>b. How consensus mechanisms (Proof of Work, Proof of Stake) function</p>
                          <p>c. Smart contracts and their applications</p>

                          <h3>3. Mining and Crypto Transactions</h3>

                          <p>a. What mining is and its role in validating transactions</p>
                          <p>b. Step-by-step process of mining Bitcoin and other coins</p>
                          <p>c. Transaction fees, wallets, and security practices</p>

                          <h3>4. Crypto Trading and Investment Strategies</h3>
                          

                          <p>a. Fundamental vs. technical analysis in crypto markets</p>
                          <p>b. Understanding volatility and market psychology</p>
                          <p>c. Strategies for short-term trading and long-term investment</p>
                    </div>
                </Col>

                <Col>
                  <div>
                    <h3>5. Security and Risk Management</h3>
                    <p>a. Securing crypto assets (cold wallets, multi-factor authentication)</p>
                    <p>b. Common crypto scams and how to avoid them</p>
                    <p>c. Regulatory frameworks and legal considerations</p>

                    <h3>6. DeFi and NFTs</h3>
                    <p>a. Introduction to Decentralized Finance (DeFi) platforms</p>
                    <p>b. How NFTs (Non-Fungible Tokens) work and their use cases</p>
                    <p>c. Yield farming, staking, and liquidity pools</p>

                    <h3>7. Building a Crypto Portfolio</h3>
                    <p>a. Assessing and diversifying your investments</p>
                    <p>b. Tools for portfolio tracking and analysis</p>
                    <p>c. Using APIs and bots for automated trading</p>

                    <h3>8. The Future of Cryptocurrency</h3>
                    <p>a. Innovations like CBDCs (Central Bank Digital Currencies)
                      <b>b. Crypto’s role in financial inclusion</b>
                      <p>c. Predictions and trends in blockchain technology</p>
</p>



                  </div>
                </Col>
            </Row>
       </Container>
      
    </div>
  )
}

export default Coriculum
