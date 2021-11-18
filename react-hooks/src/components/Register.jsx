import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import {Component} from 'react'
class Register extends Component {
  state = {
    name: null,
    surname: null,
    email:null,
    password: null,
    inputError: {
      name: '',
      surname: '',
      email: '',
      password: ''
    }
  }

render(){
  return(
      <Container>
        <Row className="justify-content-center form-register mt-5">
          <Col xs={12} md={6}>
            <h1 className="text-center">Register here !</h1>
            <Form>
              <Form.Group>
              <Form.Label className="font-weight-bold">Name:</Form.Label>
              <Form.Control type="text" pattern=".{2,}"   required title="2 characters minimum" required placeholder="Enter your name"/>
              </Form.Group>
              <Form.Group>
              <Form.Label className="font-weight-bold">Surname:</Form.Label>
              <Form.Control type="text" pattern=".{3,}"   required title="3 characters minimum"  placeholder="Enter your surname"/>
              </Form.Group>
              <Form.Group>
                <Form.Label className="font-weight-bold">Email address:</Form.Label>
                <Form.Control type="email"  required placeholder="alimukhtor@example.com"/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label className="font-weight-bold">Password:</Form.Label>
                  <Form.Control type="password" pattern=".{8,}"  required title="8 characters minimum" placeholder="Password" />
              </Form.Group>
              <Form.Group>
                <Form.Label className="font-weight-bold">Repeat Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="success" type="submit">
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Register
