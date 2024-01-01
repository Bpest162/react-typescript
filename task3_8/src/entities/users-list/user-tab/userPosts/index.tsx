import { useParams } from "react-router-dom";
import './index.scss';
import { useUserPostData } from "./hook/useUserPostData";


const UserPosts = () =>{
    const { userId } = useParams()
    const { data, isLoading, isError } = useUserPostData(userId);

    if(isError){
        return <p>Error</p>
    }
    if(isLoading){
        return <p>Loading</p>
    }
    return(
        <div className="user-post-list">
            {data.map((post) => (
                <div className="user-post-list__item" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
               
            ))}
        </div>
    )
}
export default UserPosts;