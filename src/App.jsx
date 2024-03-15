import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/elements/header';
import Opinions from '../components/opinions/Opinions';
import ListOptions from '../components/listOpinions/ListOpinions';

function App() {

  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Opinions />}></Route>
          <Route path="/listOpinions" element={<ListOptions />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App
