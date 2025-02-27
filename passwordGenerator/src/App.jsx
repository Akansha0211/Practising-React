import { useState , useCallback, useEffect, useRef} from 'react'
import './App.css'
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook 
  const passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(()=>{
    // react compiles to javascript, where it runs we have window object
    // in next js , server side rendering, so no window object on server side

    // using Refernce 
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  },[password]);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) string += "0123456789";
    if(charactersAllowed) string += "!@#$%^&*-_+=[]{}`~";

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass)
  },[length, numberAllowed, charactersAllowed, setPassword]);

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charactersAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type='text' 
            value={password} 
            className='outline-none w-full py-1 px-3' placeholder='password'
            readOnly
            ref={passwordRef}
            />
            <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={50} value={length} className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {setNumberAllowed((prev)=>!prev)}}
              />
              <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked={charactersAllowed}
              id="characterInput"
              onChange={() => {setCharactersAllowed((prev)=>!prev)}}
              />
              <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
