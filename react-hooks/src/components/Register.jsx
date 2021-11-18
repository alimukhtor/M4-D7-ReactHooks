import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import {Component} from 'react'
class Register extends Component {
  state = {
    registration: {
      name: '',
      surname:'',
      email: '',
      password: '',
      confirmPassword: ''
    },
    errorInput : false
  }



  handleInput=(inputField, value)=> {
    this.setState({
      registration:{
        ...this.state.registration,
        [inputField]:value

      }
    })

  }

  isClickedBtn =()=> {
    let isItFilled = false;
    if(this.state.registration.name.length >= 2 &&
      this.state.registration.surname.length >= 3 &&
      this.state.registration.password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/) &&
      this.state.registration.confirmPassword === this.state.registration.password

      ){
      isItFilled = true;
    }
  return isItFilled
  }


  handleRegistrationform =(e)=> {
    e.preventDefault()
    this.setState({
      errorInput : true
    })
  }
render(){
  return(
    <>
    {

      (this.state.errorInput) ?
      <h1>Registration completed!</h1> :

      (
        <>
        <Container>
          <Row className="justify-content-center form-register mt-5">
            <Col xs={12} md={6}>
              <h1 className="text-center">Register here !</h1>
              <Form onChange={this.handleRegistrationform}>
                <Form.Group>
                <Form.Label className="font-weight-bold">Name:</Form.Label>
                <Form.Control type="text" required title="at least 2 chars" placeholder="Enter your name"
                value={this.state.registration.name}
                onChange={(e) => this.handleInput('name', e.target.value)}
                />
                </Form.Group>
                <Form.Group>
                <Form.Label className="font-weight-bold">Surname:</Form.Label>
                <Form.Control type="text" required title="at least 3 chars" placeholder="Enter your surname"
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
                    <Form.Control type="password"  required title="Should contain at least 8 chars, 1 digit, 1 letter" placeholder="Password"
                    value={this.state.registration.password}
                    onChange={(e) => this.handleInput('password', e.target.value)}

                    />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="font-weight-bold">Repeat Password:</Form.Label>
                  <Form.Control type="password" required title="Should match with your password" placeholder="Password"
                  value={this.state.registration.confirmPassword}
                  onChange={(e) => this.handleInput('confirmPassword', e.target.value)}
                  />
                </Form.Group>
                <Button variant="success" type="submit" disabled={!this.isClickedBtn()}>

                  Sign Up
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        </>
      )

    }
    </>

    )
  }
}

export default Register
