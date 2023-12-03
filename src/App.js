import Main from "./components/Body/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ThemeContext } from "./contextAPIs/ThemeContext";
import './App.scss';
import './index.css'
import { useContext, useReducer, useState } from "react";
import { ResumeModelStateContext } from "./contextAPIs/StateContext";
import { ResumeModel } from "./components/models/resumeModel";
import { FontContext } from "./contextAPIs/fontContext";
import { fontModel } from "./components/models/fontModel";
import { Route } from "react-router-dom";

function App() {
  const [toggleDark, setToggleDark] = useState('dart');
  const [fontChange, setFontChange] = useState('Arial, sans-serif');

  function handleDarkMode() {
    toggleDark === 'dark' ? setToggleDark('light') : setToggleDark('dark');
  }
  function handleFontChange(value) {
    setFontChange(value);
  }

  return (
    <ThemeContext.Provider value={toggleDark}>
      <ResumeModelStateContext.Provider value={ResumeModel}>
        <FontContext.Provider value={fontModel}>


          <div className={`${toggleDark}`} style={{fontFamily: `${fontChange}`}} >

            <div className={`App container m-auto py-12`}>
              <Header onSwitch={handleDarkMode} onFontChanges={handleFontChange} name={"Sheikh Anas Bilal"} />
              <Main />
              <Footer />
            </div>

          </div>
        </FontContext.Provider>
      </ResumeModelStateContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
