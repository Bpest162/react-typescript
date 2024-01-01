import { useUserAlbums } from "./hook/useUserAlbums";
import { useParams } from "react-router-dom";
import './index.scss';

const UserAlbums = () =>{
    const { userId } = useParams();

    const { data, isLoading, isError } = useUserAlbums(userId);

    if(isError){
        return <p>Error</p>
    }
    if(isLoading){
        return <p>Loading</p>
    }

    return(
        <ul className="user-album-list"> 
            {data.map((album) => (
                <li className="user-album-list__items" key={album.id}>
                    <span>{album.id}</span>
                    <p>{album.title}</p>
                </li>
            ))}
        </ul>
    )
}
export default UserAlbums;