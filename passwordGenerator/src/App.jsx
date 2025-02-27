import { useState , useCallback} from 'react'
import './App.css'
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback (()=>{
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) string += "0123456789"
    if(charactersAllowed) string += "!@#$%^&*-_+=[]{}~`";

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * string.length + 1);
      pass = string.charAt(char);
    }
    setPassword(pass)
  },[length, numberAllowed, charactersAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type='text' 
            value={password} 
            className='outline-none w-full py-1 px-3' placeholder='password'
            readOnly/>
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
      </div>
    </>
  )
}
export default App
