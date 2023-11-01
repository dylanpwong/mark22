
import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
// import home_container from './components/homeContainer'
import HomeComponent from './components/homeComponent';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import React from 'react';
// import Example from'./components/HomeItems/DescriptionHook'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header/><HomeComponent/><Footer/></>}/>
          {/* <Route path="/" element={<HomeComponent/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
