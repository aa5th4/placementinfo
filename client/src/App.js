import React,{useEffect} from "react";
import Paperbase from './components/paperbase';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
      <Paperbase/>
  );
}

export default App;
