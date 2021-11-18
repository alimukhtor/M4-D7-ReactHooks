import {Container, Row, Col, Form, Button, Spinner} from 'react-bootstrap'
import {Component} from 'react'
class Register extends Component {
  state = {
    loading: false,
    registration: {
      name: '',
      surname:'',
      email: '',
      password: '',
      confirmPassword: ''
    },
    errorInput : false
  }


   fetchLoading =()=> {
     this.setState({loading:true})
    setTimeout(()=>{
      this.setState({loading:false})
    }, 300)
  }

  handleInput=(inputField, value)=> {
    this.setState({
      registration:{
        ...this.state.registration,
        [inputField]:value

      }
    })

  }
render(){
  const {loading} = this.state
  return(
      <Container>
        <Row className="justify-content-center form-register mt-5">
          <Col xs={12} md={6}>
            <h1 className="text-center">Register here !</h1>
            <Form >
              <Form.Group>
              <Form.Label className="font-weight-bold">Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your name"
              value={this.state.registration.name}
              onChange={(e) => this.handleInput('name', e.target.value)}
              />
              </Form.Group>
              <Form.Group>
              <Form.Label className="font-weight-bold">Surname:</Form.Label>
              <Form.Control type="text"  placeholder="Enter your surname"
              value={this.state.registration.surname}
              onChange={(e) => this.handleInput('surname', e.target.value)}
              />
              </Form.Group>
              <Form.Group>
                <Form.Label className="font-weight-bold">Email address:</Form.Label>
                <Form.Control type="email"   placeholder="alimukhtor@example.com"
                value={this.state.registration.email}
                onChange={(e) => this.handleInput('email', e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label className="font-weight-bold">Password:</Form.Label>
                  <Form.Control type="password"  placeholder="Password"
                  value={this.state.registration.password}
                  onChange={(e) => this.handleInput('password', e.target.value)}

                  />
              </Form.Group>
              <Form.Group>
                <Form.Label className="font-weight-bold">Repeat Password:</Form.Label>
                <Form.Control type="password" placeholder="Password"
                value={this.state.registration.confirmPassword}
                onChange={(e) => this.handleInput('confirmPassword', e.target.value)}
                />
              </Form.Group>
              <Button variant="success" type="submit" onClick={this.fetchLoading} disabled={loading}>
              {
                loading && <Spinner animation="grow" variant="danger" />
              }
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
