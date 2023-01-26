import { Routes, Route } from 'react-router-dom';
import { ArticleDetails } from './pages/article-details/ArticleDetails';
import { HomePage } from './pages/home-page/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/articles/:id' element={<ArticleDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
