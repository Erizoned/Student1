import React, { useState } from "react";


function Calculator(){
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [kavo, setKavo] = useState("");
    const [result, setResult] = useState("");

    const opr = (chisl) => {
        if (result !== ""){
            setNum1(result);
            setResult("");
        }
        if (kavo === ""){
            setNum1(num1 + chisl);
        }
        else {
            setNum2(num2 + chisl);
        }
    }
    const delaem = () => {
        switch (kavo) {
            case "+":
              setResult(parseFloat(num1) + parseFloat(num2));
              break;
            case "-":
              setResult(parseFloat(num1) - parseFloat(num2));
              break;
            case "*":
              setResult(parseFloat(num1) * parseFloat(num2));
              break;
            case "/":
              setResult(parseFloat(num1) / parseFloat(num2));
              break;   
            case "%":
              setResult(parseFloat(num1) % parseFloat(num2));
        }
        setNum1("");
        setNum2("");
        setKavo("");
    }
    function steret(){
        setNum1("");
        setNum2("");
        setKavo("");
        setResult("");
    }
    const styleNum = {
        backgroundColor: 'white',
        padding: '5px',
        width: '30px',
        height: '30px',
        cursor: 'pointer'
    }
    const styleOpr = {
        backgroundColor: 'orange',
        padding: '5px',
        width: '30px',
        height: '30px',
        cursor: 'pointer'
    }
    const inp = {
        width: '112px',
        height: '20px',
        fontFamily: 'sans-serif',
        fontSize: '25px'
    }
    const ss = {
      border: '3px',
      borderStyle:'solid',
      width: '120px'
    }

    return (
        <div>
          <hr></hr>
          <h1>4 задание</h1>
          <br></br>
          <div style={ss}>
          <input style={inp} type="text" id="Result" value={`${result} ${num1} ${kavo} ${num2}`} readOnly />
          <br></br>
          <button onClick={() => steret()} style={styleOpr}>C</button>
          <button onClick={() => setKavo('/')} style={styleOpr}>/</button>
          <button onClick={() => setKavo('%')} style={styleOpr}>%</button>
          <button style={styleOpr}>&nbsp;</button>
          <br></br>
          <button onClick={() => opr('7')} style={styleNum}>7</button>
          <button onClick={() => opr('8')} style={styleNum}>8</button>
          <button onClick={() => opr('9')} style={styleNum}>9</button>
          <button onClick={() => setKavo('*')} style={styleOpr}>*</button>
          <br></br>
          <button onClick={() => opr('4')} style={styleNum}>4</button>
          <button onClick={() => opr('5')} style={styleNum}>5</button>
          <button onClick={() => opr('6')} style={styleNum}>6</button>
          <button onClick={() => setKavo('-')} style={styleOpr}>-</button>
          <br></br>
          <button onClick={() => opr('1')} style={styleNum}>1</button>
          <button onClick={() => opr('2')} style={styleNum}>2</button>
          <button onClick={() => opr('3')} style={styleNum}>3</button>
          <button onClick={() => setKavo('+')} style={styleOpr}>+</button>
          <br></br>
          <button onClick={() => opr('0')} style={styleNum}>0</button>
          <button style={styleNum}>&nbsp;</button>
          <button onClick={() => setKavo('.')} style={styleOpr}>.</button>
          <button onClick={delaem} style={styleOpr}>=</button>
          </div>
        </div>
      );
    }    


export default Calculator;