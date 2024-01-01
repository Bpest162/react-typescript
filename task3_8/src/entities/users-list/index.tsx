import { useQuery } from "@tanstack/react-query";
import { Link, Outlet } from "react-router-dom";
import { getAllUsers } from "shared/api/users-api/index";
import './index.scss';

const UsersList = () =>{
    const { data, error, isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: getAllUsers
    });

    if(error) return <p>Error!</p>
    if(isLoading) return <p>Loading...</p>


    return(
        <>
            <div className="user-card">
                {data?.map((user) => (
                    <div className="user-card__item" key={user.id}>
                        <p className="user-name">{user.name}</p>
                        <p className="user-username">Username: {user.username}</p>
                        <Link to={`/users/${user.id}`}>See more  &#8594;</Link>
                    </div>
                ))}
                <Outlet/> 
            </div>
            
        </>
    )
};
export default UsersList;