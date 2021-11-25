import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router';
import Home from './pages/home';
import License from './pages/license';

function App() {
  return (
    <div >
      <BrowserRouter>
          <Routes>
            <Route path ="/" exact element ={<Home /> } /> 
            <Route path="/license" exact element ={ <License />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
