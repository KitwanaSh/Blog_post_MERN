import './App.css'
import { Routes, Route } from "react-router-dom"

import Layout from './components/Layout';
import IndexPages from './components/Pages/IndexPages';
import LoginPage from './components/Pages/LoginPage';
import RegisterPage from './components/Pages/RegisterPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPages />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>
    
  )
}

export default App
