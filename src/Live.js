import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Live extends React.Component {
  constructor (props) {
    super(props)
    this.state = { curTime: new Date() }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        curTime: new Date() })
    }, 1000)
  }

  render () {
    const imgProps = {
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: 'url(/resources/images)',
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      filter: 'blur(5px) brightness(70%)',
      zIndex: -1
    }
    return (
      <>
        <div id='bg-image' style={imgProps} />
        <Container fluid style={{
          marginTop: "30px",
          marginLeft: "30px",
          marginBottom: "10%",
          display: "block",
          width: "100%"
        }}>
          <Row>
            <Col md={4}>
              <h2 style={{ color: 'white' }}>{
                new Intl.DateTimeFormat('en-US',
                  { month: 'long', day: 'numeric', year: 'numeric' }
                ).format(this.state.curTime)}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <h3 style={{ color: 'white' }}>{
                new Intl.DateTimeFormat('en-US',
                  { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }
                ).format(this.state.curTime)}
              </h3>
            </Col>
          </Row>
        </Container>
        <Container fluid style={{
          marginBottom: "10%",
        }}>
          <Row className="justify-content-md-center">
            <Col md={3}>
              <h1 style={{
                padding: '15px',
                border: '3px solid',
                borderGridor: 'rgb(220,220,220)',
                textAlign: 'center',
                color: 'rgb(220,220,220)'
              }}>Nate Richman</h1>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
export default Live
