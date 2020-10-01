import React,{useState, useEffect} from 'react';
import './App.css';

const App=()=>{
  
  const getMode = () =>{
    const initialMode = localStorage.getItem("mode");
    if(initialMode==null)
      {    //this is for those who visits our website first time
          if(window.matchMedia("(prefers-color-scheme:dark)").matches)
          {
            return true       // here checking the user preference from user computers if you     applied your computer black theme them it will automatically apply the dark theme for u in this website
          }else{
            return false
          }
        }else{
      return JSON.parse(localStorage.getItem("mode"));
      }
    }
    
  const [dark, setdark] = useState(getMode);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
  }, [dark]);
  
  return(
    <div className= {dark ? "App dark-mode" : "App"}>
      <div className="Nav">
          <label className="switch">
            <input onChange= {()=>setdark(!dark)} type="checkbox" checked={dark}/>
            <span className="slider round"></span>
          </label>
      </div>
      <div className="Content">
        <h1>{ dark ? "Dark Mode is on" : "Light Mode is on" }</h1>
        <p style={{fontSize:"20px"}}> Want to Enable darker mode ? Press toggle button</p>
      </div>
    </div>
  );
}
export default App;