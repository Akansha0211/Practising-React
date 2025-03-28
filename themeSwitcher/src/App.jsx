import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const [themeMode, setThemeMode] = useState()
  const lightTheme = () =>{
    setThemeMode("light")
  }
  const darkTheme = () =>{
    setThemeMode("dark")
  }
  //actual chnage in theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm-max-auto flex justofy-end mb-4">
              {/* themeButton*/}
              <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm max-auto">{/*Card */}
              <Card/>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
