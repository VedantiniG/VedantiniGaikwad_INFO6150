import './App.css'
import Login from './App/pages/Login'
import { Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Container>
        <Row className='card'>
            <Routes>
              <Route exact path="/" component={<Login/>} />
            </Routes>
        </Row>
      </Container>
    </>
  )
}

export default App
