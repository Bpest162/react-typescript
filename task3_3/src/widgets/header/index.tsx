import './index.sass';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () =>{
    return(
        <div className='header'>
            <ul className='menu'>
                <li className='menu-item'>
                    <Link to="">Main</Link>
                </li>
                <li className='menu-item'>
                    <Link to="post">Post List</Link>
                </li>
                <li className='menu-item'>
                    <Link to="todo">Todo list</Link>
                </li>
                <li className='menu-item'>
                    <Link to="user">User List</Link>
                </li>
            </ul>
        </div> 
    )
}

export default Header;
