import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import NavLinks from './NavLinks';

function Nav() {
    const [menueOn, setMenueOn] = useState(false)
    const handleClick = (e) => {
        setMenueOn(prev => !prev)
        console.log(menueOn);
    }
    return (
        <nav className='w-full items-center flex justify-between align-middle mx-auto p-8'>
            <h1 className='text-green-400 font-bold text-3xl font-s'>React.</h1>

            <NavLinks info={"flex lg:flex-row h-2/4 w-max justify-between align-middle justify-items-end"} />

            {menueOn && <NavLinks info={"flex h-2/4 w-max justify-between align-middle justify-items-end"} />}

            <div onClick={handleClick} className='sm:hidden'>
                {menueOn === false ? <AiOutlineMenu className='items3' size={25} color={"white"} /> : <AiOutlineClose className='items3' size={25} color={"white"} />}
            </div>
        </nav>
    );
}

export default Nav;