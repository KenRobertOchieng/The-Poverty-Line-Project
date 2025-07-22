import HomePage from './pages/HomePage'
import "./index.css";
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';



function App() {

  return (
    <div className='bg-gray-700'>
      <LoginPage />
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default App
