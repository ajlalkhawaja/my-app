// ifc import shortkey for below react
import React, {useState} from 'react'

const TextForm = function(props) {
  const handleUpClick= ()=> {
    let newText= text.toUpperCase();
    setText(newText)
    // console.log("Upper case was clicked")
  }
  const handleLoClick= ()=> {
    let newText= text.toLowerCase();
    setText(newText)
    // console.log("Upper case was clicked")
  }
  const handleOnChange= (event)=> {
    setText(event.target.value);
  }
  const [text, setText] = useState(''); // hooks
  // text= 'new text' // wrong way to set the state
  // setText("new text"); // wrong way to set the state
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
      </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
    </div>
    <div className="container my-4">
      <h1>Your text summary Zehaan</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read.</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

export default TextForm;
