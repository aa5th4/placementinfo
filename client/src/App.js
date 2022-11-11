import React,{useEffect} from "react";
import Paperbase from './components/paperbase';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './components/Form/Form';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
    <BrowserRouter>
    <Routes>
          <Route exact path="/" element={<Paperbase/>}/>
          <Route exact path="/about/:id" element={<About/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
