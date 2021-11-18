import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Register from './components/Register'
import scifi from './scifi.json'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <WarningSign text="Watch out again!" />
        <MyBadge  adge text="NEW!!" color="info" />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<BookList books={scifi} />} />
          </Routes>

      </div>
      <MyFooter />
    </BrowserRouter>
  )
}

export default App
