import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import {Component} from 'react'
class Register extends Component {
  state = {
    inputForm: {
      name: '',
      surname: '',
      email: '',
      password: ''
    }
  }

render(){
  return(
      <Container>
        <Row className="justify-content-center form-register">
          <Col xs={12} md={6}>
            <h1>Register here !</h1>
            <Form>
              <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" pattern=".{2,}"   required title="2 characters minimum" placeholder="Enter your name"/>
              </Form.Group>
              <Form.Group>
              <Form.Label>Surname:</Form.Label>
              <Form.Control type="text" pattern=".{3,}"   required title="3 characters minimum"  placeholder="Enter your surname"/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email"  required placeholder="Enter email"/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" pattern=".{8,}"  required placeholder="Password" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Repeat Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Register
