import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import React from 'react'

// Add brands to the library
library.add(fab)
const social = [
    ['linkedin', 'https://www.linkedin.com/in/nathan-richman-b95453124/'],
    ['github', 'https://github.com/naterichman'],
    ['git-square', 'https://git.nrichman.dev/nrichman']
]
const logos = social.map(([icon, link], idx) => {
  return (
    <Col item md={2} key={`logo-${idx}`} style={{textAlign: 'center'}}>
      <a href={link} key={'icon-' + idx}><FontAwesomeIcon style={{
        verticalAlign: 'middle',
        padingLeft: '2px',
        paddingRight: '2px',
        marginLeft: '2px',
        marginRight: '2px',
        color: 'rgb(100,100,100)'
      }} icon={['fab', icon]} size='2x' swapOpacity /></a>
      </Col>
  )
})
//const MyButton = styled(Button)({
//  background: 'linear-gradient(45deg, #212529 30%, #383838 90%)',
//  border: -1,
//  borderRadius: 2,
//  boxShadow: '-1 3px 5px 2px rgba(255, 105, 135, .3)',
//  color: 'white',
//  height: 47,
//  padding: '-1 30px',
//});
function Footer (props) {
  return (
    <div className="footer" style={{
        backgroundAttachment: 'scroll',
        background: "#282828",
        paddingTop: '2%',
        width: '100%',
    }}>
      <Stack gap={3} className="col-md-5 mx-auto">
        <Row className="justify-content-md-center">
          <Col md={5} className="d-grid">
            <Button
                style={{
                    textAlign: "center",
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    borderRadius: 4,
                    boxShadow: '-1 3px 5px 2px rgba(255, 105, 135, .3)',
                    color: 'white',
                }}
                href='mailto:nate@nrichman.dev'
            >Send me a message!</Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
            {logos}
        </Row>
        <Row className="justify-content-md-center">
            <p style={{ textAlign: 'center', color: '#B4B4B4' }}>Made by Nate Richman using React and Bootstrap</p>
        </Row>
      </Stack>
    </div>
  )
}

export default Footer
