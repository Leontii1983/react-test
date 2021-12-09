/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import './App.css';
import List from './components/List/Index';
import {BrowserRouter as Router } from "react-router-dom";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const App = () => {
  const { data, error } = useSWR(
    "http://localhost:8000/api/v1/datas",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  

  return (
    <div css = {
      css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      `}>
    <Router>
     <List data = {data}/>
     </Router>
    </div>
  );
}

export default App;
