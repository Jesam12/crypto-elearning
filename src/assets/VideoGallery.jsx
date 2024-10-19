import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const VideoGallery = () => {
  const videos = [
    { id: 1, title: 'Intro to Cryptocurrency', url: 'https://youtu.be/VYWc9dFqROI' },
    { id: 2, title: 'Understanding Blockchain', url: 'https://youtu.be/IZWrAbFveSA?si=92YQD5ybGR_L6SIH' },
    { id: 3, title: 'Mining and Crypto Transactions', url: 'https://www.youtube.com/embeded/IZWrAbFveSA?si=92YQD5ybGR_L6SIH' },
    { id: 4, title: 'Copy Trading and Investment Strategies', url: 'https://www.youtube.com/embeded/IZWrAbFveSA?si=92YQD5ybGR_L6SIH' },
    { id: 5, title: 'Security and Risk Management', url: 'https://www.youtube.com/embeded/IZWrAbFveSA?si=92YQD5ybGR_L6SIH' },
    { id: 6, title: 'DeFi and NFTs', url: 'https://www.youtube.com/embeded/IZWrAbFveSA?si=92YQD5ybGR_L6SIH' },
    { id: 7, title: 'Building a Crypto Portfolio', url: 'https://www.youtube.com/embeded/IZWrAbFveSA?si=92YQD5ybGR_L6SIH' },
    { id: 8, title: 'The Future of Cryptocurrency', url: 'https://www.youtube.com/embeded/IZWrAbFveSA?si=92YQD5ybGR_L6SIH' },
  ];

  return (
    <Container className="mt-5">
      <h2 className="text-center  mb-4">Our Videos</h2>
      <Row>
        {videos.map((video) => (
          <Col key={video.id} md={4} className="mb-4">
            <Card>
              <div className="ratio ratio-16x9">
                <iframe
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <Card.Body>
                <Card.Title>{video.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VideoGallery;
