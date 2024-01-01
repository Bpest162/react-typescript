import UsersList from 'entities/users-list';
import './index.scss';

const UsersPage = () =>{
    return(
        
        <div className='user-list-section'>
            <h2 className='user-list-title'>User List</h2>
            <UsersList/>
        </div>    
    )
}

export default UsersPage;