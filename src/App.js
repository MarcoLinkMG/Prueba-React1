import 'bootstrap/dist/css/bootstrap.min.css'
import MiApi from "./components/MiApi"
import portada from './dragonballsuper.jpg'

function App() {
  return (
    <>
      <div className='header'>
        <img src={portada} className='portada'/>
      </div>
      <div className='section'>
        <MiApi />
      </div>
    </>
  )
}

export default App;
