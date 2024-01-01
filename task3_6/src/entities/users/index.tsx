import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "shared/api/users-api/index";
import './index.scss'

const UserCard = () =>{
    const { data, error, isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: getAllUsers
    });

    if(error) return <p>Error!</p>
    if(isLoading) return <p>Loading...</p>


    return(
        <ul className="user-card">
            {data?.map((user) => (
                <li className="user-card__item" key={user.id}>
                    <p className="user-name">{user.name}</p>
                    <p className="user-username">{user.username}</p>
                </li>
            ))}
        </ul>
    )
};
export default UserCard;