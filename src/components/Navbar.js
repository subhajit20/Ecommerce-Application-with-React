import React, { useState, useContext, useCallback } from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { AttentionSeeker } from 'react-awesome-reveal'
import { Storecontext } from '../context/UserContextProvider';

function Navbar() {
    const { state, myFunc } = useContext(Storecontext);
    const [theme, setTheme] = useState(false)
    console.log(state.darkmode)
    const changeTheme = useCallback(() => {
        if (theme === false) {
            myFunc({ type: 'THEME_CHANGE', background: "bg-[#111827]", textcolor: "white", carttextcolor: 'text-black' })
            setTheme(true)
        } else if (theme === true) {
            myFunc({ type: 'THEME_CHANGE', background: "bg-[#fbecfb]", textcolor: "black", carttextcolor: 'text-white' });
            setTheme(false)
        }
    }, [theme, myFunc])
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.4
            }}
            className={` flex justify-between justify-items-center sm:justify-around p-3 sm:p-0 fixed w-full  text-${state.darkmode.text_color} ${state.darkmode.background} z-30 top-0 shadow-md shadow-slate-900`} >
            <div className="sm:mr-10 sm:p-3">
                <ul className='flex justify-between'>
                    <AttentionSeeker effect={'bounce'}>
                        <li className={`font-semibold px-2 py-2 sm:px-5 text-xl font-mono  transition-all duration-500 rounded-3xl sm:text-2xl text-${state.darkmode.text_color}`}><Link to="/" >Buy Karo</Link></li>
                    </AttentionSeeker>
                </ul>
            </div>
            <div className={`absolute top-[92vh] w-full text-${state.darkmode.text_color} ${state.darkmode.background} text-white left-0 p-3 sm:p-5 sm:top-0 sm:w-64 sm:bg-transparent sm:relative sm:text-slate-900  `}>
                <ul className="flex justify-around sm:justify-between justify-items-center">
                    <li className={`font-medium transition-all duration-500  text-base sm:text-xl sm:px-3 sm:mr-3 text-${state.darkmode.text_color} sm:text-${state.darkmode.text_color}`}><Link to="/" ><i className="fa-solid fa-house hover:text-2xl transition-all duration-100  fa-house h-6 w-10 sm:h-6 sm:w-6"></i></Link></li>
                    <li className={`cursor-pointer sm:p-1  sm:mr-2 text-${state.darkmode.text_color} sm:text-${state.darkmode.text_color}`}><Link to="/m"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-10 sm:h-6 sm:w-6 hover:text-2xl transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg><i className={`fa-solid fa-circle sm:absolute sm:bottom-8 sm:left-[100px] sm:text-2xl relative bottom-7 left-5 `}><p className={`sm:absolute sm:bottom-[6px] sm:left-2 bottom-[18px] left-1 ${state.darkmode.carttext} text-sm relative `}>1</p></i></Link></li>
                    <li className={`sm:py-1 font-medium transition-all rounded-3xl duration-500 sm:text-xl sm:px-3 text-${state.darkmode.text_color} sm:text-${state.darkmode.text_color}`}><Link to="/" ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-10 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg></Link></li>
                    <li className="cursor-pointer  font-medium transition-all rounded-3xl duration-500 sm:text-xl sm:px-3 sm:text-[#000000]" onClick={changeTheme}>{theme === false ? <i className={`fa-solid fa-moon text-xl sm:text-2xl text-${state.darkmode.text_color} hover:text-2xl transition-all duration-300`}></i> : <i className={`fa-solid fa-sun text-xl sm:text-2xl text-${state.darkmode.text_color} hover:text-2xl transition-all duration-300`}></i>}</li>
                </ul>
            </div >
        </motion.div >
    )
}


export default Navbar


