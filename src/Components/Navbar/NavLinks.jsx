import React from 'react';
import NavItem from './NavigationItem';

function NavLinks({ulist,obj}) {
    return (
        <div className={obj}>
            <ul className={ulist}>
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