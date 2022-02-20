import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Footer from './Footer';
import Live from './Live';
import MainNav from './MainNav'


function Home() {

    return (
      <Container fluid>
        <Row>
          <Live />
        </Row>
        <Row>
          <MainNav />
        </Row>
        <Row>
          <Container fluid style={{
            backgroundAttachment: 'scroll',
            padding: '5%',
            width: '100%',
          }}>
            <Row className="justify-content-md-center">
              <Col md={8} style={{
                  borderRadius: '10px',
                  padding: "5%",
                  background: "#383838",
                  color: "#C8C8C8"
              }}>
                <h3>About Me</h3>
                <p>I'm a Data Scientist/Developer currently working as an Scientific Solutions Engineer <a href='https://flywheel.io' target='_blank'>Flywheel</a>.  I'm passionate about applying mathematics and statistics to biological problems.</p>

                <p>I love to learn and discover new things so I have a lot of projects outside of work.  Most recently I've been really interested in computer networking and self-hosting.  Over the past few years I've been accumulating hardware and implementing software to make my own networking lab with which to experiment, including building this website!  Check out my <a href='https://wiki.nrichman.dev' target="_blank">Wiki</a> to learn more about what I've been up to</p>

                <p>Outside of work and somewhat nerdy computer things, I love to play, <a href='https://www.last.fm/user/naterich2' target='_blank'>listen to</a>, and <a href='https://rateyourmusic.com/~naterich2' target='_blank'>rate</a> music.  I love to bike, rock climb, camp, canoe, hike, kayak, disc golf, and play ultimate frisbee.</p>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    )
}

export default Home
