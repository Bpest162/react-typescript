import { useQuery } from "@tanstack/react-query";
//import { Users } from "shared/api/typecode/models";
import { fetchUsers } from "shared/api/typecode/base";
import './index.scss'

const UserCard = () =>{
    const { data, error, isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers
    });

    if(error) return <p>{error.message}</p>
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