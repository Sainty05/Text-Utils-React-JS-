import React, { useState } from "react";
//1. import useState to use this module

export default function TextForm(props) {
  const handleToupcase = () => {
    let newText = text.toUpperCase();

    //4. Here we call setText to set text value newText
    setText(newText);
    props.showAlert("Text ToUpperCase!","success")
  };

  const handleTolowcase = () => {
    let newText = text.toLowerCase();

    //4. Here we call setText to set text value newText
    setText(newText);
    props.showAlert("Text ToLowerCase!","success")
  };

  const handleClr = () => {
    let newText = "";

    //4. Here we call setText to set text value newText
    setText(newText);
    props.showAlert("Text Cleared!","warning")
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking Text!","success")
  };

  //2. Common sentax for useState the text is variable which value is 'Enter text here' we set as defult and if we want tocahnge it change through fonction setText
  const [text, setText] = useState("");

  const handleOnchange = (ev) => {
    //3. we call setText here to set its value as what we typed
    setText(ev.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById('txtArea')
    text.select();
    navigator.clipboard.writeText(text.value)
    document.getSelection().removeAllRanges()
    props.showAlert("Text Copied!","success")
  }

 

  return (
    <div style={props.mode}>
      <div className="container my-3 h-100">
        <h1>Enter Text here to Anylize</h1>
        <textarea style={props.mode}
          className="form-control my-3"
          value={text}
          id="txtArea"
          onChange={handleOnchange}
          rows={8}
        ></textarea>
        <button onClick={handleToupcase} className="btn btn-secondary mx-1 my-1">
          Change toUppercase
        </button>
        <button onClick={handleTolowcase} className="btn btn-secondary mx-1 my-1">
          Change toLowercase
        </button>
        <button onClick={handleClr} className="btn btn-secondary mx-1 my-1">
          Clear Text
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-secondary mx-2 my-2"
        >
          Speak
        </button>
        <button
          type="submit"
          onClick={handleCopy}
          className="btn btn-secondary mx-2 my-2"
        >
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h3>Your text Summary</h3>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words & {text.length} caracters{" "}
        </p>
        <p>{(0.008 * text.split(/\s+/).filter((element)=>{return element.length !== 0}).length).toFixed(3)} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
