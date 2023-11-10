import React from "react";
const sum = <p>{5 + 2}</p>
const Me = {
  name: 'Антон',
  lastname: 'Романов',
  age: 17
}

const style = {
  fontFamily: 'Sans',
  color: 'red',
  fontSize: '25px'
}
function App() {
  return (
    <div>
      <h1>2 Задание</h1>
          {sum}
        <hr></hr>
        <h1>3 задание</h1>
      <p style={style}>{Me.name} {Me.lastname}, возраст: {Me.age} лет.</p>
    </div>
  );
}

export default App;

