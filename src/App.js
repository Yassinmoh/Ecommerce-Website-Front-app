import './App.css';
import HomePage from './container/HomePage/HomePage'
import ProductListPage from './container/ProductListPage/ProductListPage'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/:slug"  element={<ProductListPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
