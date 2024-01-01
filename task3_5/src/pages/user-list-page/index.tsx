import UserCard from 'entities/ui/user-card';
import './index.scss';

const UserList = () =>{
    return <div className='user-list-section'>
        <h2 className='user-list-title'>User List</h2>
        <UserCard/>
    </div>
}

export default UserList;