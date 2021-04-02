import React from 'react';
import Link from './Link';

const Header=()=>{
    return (
        <div className='ui secondary pointing menu'>
            <Link href='/' className='item'>
                Dropdown
            </Link>
            <Link href='/list' className='item'>
                List
            </Link>
            <Link href='/dropdown' className='item'>
                Dropdown
            </Link>
            
        </div>
    )


}

export default Header;