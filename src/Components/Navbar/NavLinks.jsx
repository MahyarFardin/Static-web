import React from 'react';
import NavItem from './NavigationItem';

function NavLinks({info}) {
    return (
        <div className='fixed p-7 h-full w-1/3 bg-black top-0 left-0'>
            <ul className={info}>
                <NavItem title={"home"} />
                <NavItem title={"Company"} />
                <NavItem title={"Resourses"} />
                <NavItem title={"About"} />
                <NavItem title={"Contact"} />
            </ul>
        </div>
    );
}

export default NavLinks;