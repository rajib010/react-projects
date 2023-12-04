import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(1);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef variable
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*?";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8
      bg-gray-800 text-orange-500 div-in-middle">
        <h1 className="text-white text-center my-3 text-3xl">Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} readOnly ref={passRef}
          placeholder='Password'
          className='outline-none w-full py-1 px-3' />
          <button className='outline-none bg-blue-700 text-white 
          py-0.5 shrink-0' onClick={copyPassword}
          >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2 mb-5">
          <div className="flex items-center gap-x-1">
            <input type="range"
              min={1}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)} />
            <label>Length : {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => setNumberAllowed((prev) => !prev)} />
          </div>
          <label>Numbers</label>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => setCharAllowed((prev) => !prev)} />
          </div>
          <label>Characters</label>
        </div>
      </div>
    </>
  )
}

export default App;
