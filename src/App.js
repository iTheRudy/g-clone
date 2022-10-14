import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Routers from './components/Routers';
import Footer from './components/Footer';
export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div className={darkTheme?"dark": " "}>
      <div className="bg-gray-100 dark:bg-zinc-800 dark:text-gray-200 min-h-screen ">
        <Navbar darkTheme ={darkTheme} setDarkTheme={setDarkTheme}/>
        <Routers />
        <Footer />
      </div> 
    </div>
  )
} 

// export default App;
