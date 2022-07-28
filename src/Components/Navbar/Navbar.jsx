import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import NavLinks from './NavLinks';

function Nav() {
    const [menueOn, setMenueOn] = useState(false)
    const handleClick = (e) => {
        setMenueOn(prev => !prev)
    }
    return (
        <nav className='w-full items-center flex justify-between align-middle mx-auto p-8'>
            <h1 className='text-green-400 font-bold text-3xl font-s'>React.</h1>

            <div className='hidden sm:block'>
                <NavLinks ulist={"flex h-2/4 w-max justify-between align-middle justify-items-end"} />
            </div>

            {menueOn && <NavLinks obj={"fixed p-7 h-full w-2/3 bg-black top-0 left-0"} ulist={"flex-col h-2/4 w-max justify-between align-middle justify-items-end"} />}

            <div onClick={handleClick} className='sm:hidden'>
                {menueOn === false ? <AiOutlineMenu className='items3' size={25} color={"white"} /> : <AiOutlineClose className='items3' size={25} color={"white"} />}
            </div>
        </nav>
    );
}

export default Nav;