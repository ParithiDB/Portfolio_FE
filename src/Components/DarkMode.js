import React, { useEffect, useState } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {


    const [isDarkMode, setIsDarkMode] = useState( localStorage.getItem("darkMode") === "false" ? false : true);

    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
          root.setAttribute("data-theme", "dark");
        } else {
          root.setAttribute("data-theme", "light");
        }
        localStorage.setItem("darkMode", isDarkMode);
      }, [isDarkMode]);
    
      const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
      };

      const getCustomStyles = () => {
        if (isDarkMode) {
          return {
            color: "white", 
          };
        } else {
          return {
            color: "black", 
          };
        }
      };

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                checked={isDarkMode}
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
            <Moon />
                <Sun />
                
            </label>
            <style>{`
        h1, p {
          ${getCustomStyles()}
        }
      `}</style>
        </div>
    );
};

export default DarkMode;
