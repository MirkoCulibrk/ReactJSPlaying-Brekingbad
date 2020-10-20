import React,{useState,useEffect}from 'react';
import axios from 'axios';
import Header from './components/UI/Header/Header';
import CharacterGrid from './components/characters/CharacterGrids';
import './App.css';
import Search from './components/UI/Search/Search';
const App=()=> {
  const[items,setItems]=useState([]);
  const[isLoading,setIsLoading]=useState(true);
  const [query,setQuery]=useState('');
  useEffect(()=>{
    const fetchItems=async()=>{
      const result =await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
        setItems(result.data);
        setIsLoading(false);
    }
    fetchItems();
    //ovo ispod je dependenci i kad dodje do promene valua u inputu useeffect se menja svaki put
  },[query]);
  return (
    <div className="container">
        <Header></Header>
        <Search getQuery={(q)=>setQuery(q)}></Search>
        <CharacterGrid isLoading={isLoading}items={items}></CharacterGrid>
    </div>
  );
}

export default App;
