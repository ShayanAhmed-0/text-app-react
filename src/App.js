import './App.css';
import React, { useState } from 'react'
import Navbar from './Navbar';          


function App() {

  const [mode,setMode]=useState({
    color: "black",
    backgroundColor: "white",
    namee:"dark",
 
  })

const colo=(col,backcol)=>{
  setMode({
    color: col,
    backgroundColor: backcol,

  })
}


const toggler=()=>{
  if(mode.color==="black"){
    setMode({
    color: "white",
    backgroundColor: "black",
    namee: "light",
 
    })
  }
  else{
    setMode({
    color: "black",
    backgroundColor: "white",
    namee: "dark",

    })
  }
}



  const [text,setText]=useState("");

  const toUpper=()=>{
    let a=text.toUpperCase();
    setText(a);
  }
  const toLower=()=>{
    let a=text.toLowerCase();
    setText(a);
  }

  const toClear=()=>{
    setText("");
  }

  const toClears=()=>{
    if(text==="Enter text Here")
    setText("");
  }

  const upda=(e)=>{
    setText(e.target.value);
  }

  return (

    <div className="App" style={mode}>
     <Navbar/>
     <div className='container my-3'>

     <div className="form-check form-switch">
      <input className="form-check-input" onClick={toggler} type="checkbox"  id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change to {mode.namee} mode</label>
    </div>
    <div className='container my-3'>
      <button className='btn btn-primary mx-3' onClick={() => colo("white","grey")}>Grey</button>
      <button className='btn btn-primary mx-3' onClick={() => colo("white","blue")}>blue</button>
      <button className='btn btn-primary mx-3' onClick={() => colo("black","Yellow")}>Yellow</button>
      <button className='btn btn-primary mx-3' onClick={() => colo("white","Green")}>Green</button>
      <button className='btn btn-primary mx-3' onClick={() => colo("black","red")}>red</button>
    </div>
    



      <h1 className='my-3'>Enter Text Below</h1>
      <textarea style={mode} value={text} onChange={upda} onClick={toClears} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
     <button disabled={text.length===0} className="btn btn-primary my-3 " onClick={toUpper}>To upper case</button>
     <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={toLower}>To lower case</button>
     <button disabled={text.length===0} className="btn btn-primary my-3 " onClick={toClear}>Clear</button>
     <h2>Text Summary</h2>
     <span>{text.split(/\s+/).filter((e)=>{return e.length !==0}).length} words and {text.length} characters</span><br/>
     <span>It will take {(text.split(" ").length)*(0.008)} Minutes to read</span>
     <h3>preview</h3>
     <p>{text.length===0?"enter text in the text box above to preview it":text}</p>
     </div>

    </div>
  
  );
}

export default App;
