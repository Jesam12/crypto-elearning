import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import { ArrowRight } from 'react-bootstrap-icons';

function ReadMore() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
       aria-controls="example-collapse-text"
        aria-expanded={open}
        className='bg-warning'
      >
        Read More <ArrowRight/>
      </Button>
      <div style={{ minHeight: '190px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card className='bg-dark text-light' body style={{ width: '500px' }}>
            In a world where innovation is moving faster than ever, understanding cryptocurrencies isn’t just a luxury—it’s a necessity. We recognized that the crypto space can be complex and intimidating, filled with jargon, hype, and rapid changes. That’s why we’ve made it our goal to break down these barriers and deliver clear, concise, and practical learning resources.
             <div className='mt-5'>
             Cryptocurrencies represent a revolution in how we view money, finance, and trust. By equipping yourself with the right knowledge, you are becoming part of a global movement toward financial freedom and innovation.

            Let’s learn, grow, and build the future together. Explore our courses, join discussions, and take the first step toward becoming a crypto expert today!
             </div>
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default ReadMore;