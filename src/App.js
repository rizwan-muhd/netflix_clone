import React from 'react';
import './App.css';
import {actions,originals ,HorrorMovies,ComedyMovies,RomanceMovies} from  './urls'
import Banner from './components/banner/Banner';
import NavBar from './components/navbar/NavBar';
import RowPost from './components/RowPost/RowPost';



function App() {
  return (
    <div className='App'>
     <NavBar/>
     <Banner/>
    <RowPost url={originals} title='Netflix Originals'  />
    <RowPost url={actions} title='Actions' isSmall />
    <RowPost url={HorrorMovies} title='Horror Movies' isSmall />
    <RowPost url={ComedyMovies} title='Comedy Movies' isSmall />
    <RowPost url={RomanceMovies} title='Romance Movies' isSmall />
    </div>
  );
}

export default App;
