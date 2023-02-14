import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './Pages/Signin';
import Recipe from './Pages/Recipe';
import SingleRecipe from './Pages/SingleRecipe';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} /> 
        <Route path="/recipe" element={<Recipe />} /> 
        <Route path="/recipe/:rid" element={<SingleRecipe />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
