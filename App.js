import './App.css';
import React, {useState} from 'react';


const App = () => {

  const initial = 10;

  const [init, setInit] = useState(initial);
  const [closed, setClosed] = useState(true);
  const [lastname, setLastname] = useState('')
  const [firstname, setFirstname] = useState('');

  const toggle = () => {
    setClosed(!closed)
  }

    return (
      <>
        <button onClick={toggle}>{closed ? 'Open' : 'Close'}</button>
        <div className={closed ? 'isClosed' : "isOpen"}>
          <h1>現在の数字は{init}です。</h1>
          <button onClick={() => setInit(prevState => prevState + 1)}>+1</button>
          <button onClick={() => setInit(prevState => prevState - 1)}>-1</button>
          <button onClick={() => setInit(0)}>0</button>
          <button onClick={() => setInit(initial)}>最初の数値に戻す</button>
        </div>
        <h1 className="lastname"><span>{lastname}</span><span>{firstname}</span></h1>
        <div>
          <input type="text" placeholder="Last name" onChange={(e)=> setLastname(e.target.value)}/>
          <input type="text" placeholder="First name"  onChange={(e)=> setFirstname(e.target.value)}/>
        </div>
      </>
    )
}

export default App;
