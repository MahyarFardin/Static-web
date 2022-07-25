import React from 'react';

function NavItem({title}) {
    return ( 
        <li className='text-white p-2 uppercase font-bold'>{title}</li>
     );
}

export default NavItem;