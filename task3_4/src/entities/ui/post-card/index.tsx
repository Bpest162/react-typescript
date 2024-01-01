import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "shared/api/typecode/base";
import './index.scss';

const PostCard = () =>{
    const { data, error, isLoading} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts
    });

    if(error) return <p>{error.message}</p>
    if(isLoading) return <p>Loading...</p>

    return (
        <ul className="post-card">
            {data?.map((post) => (
                <li  className="post-card__item" key={post.id}>
                    <p className="post-title">{post.title}</p>
                    <p className="post-body">{post.body}</p>
                </li>
            ))}
        </ul>
    )
};

export default PostCard;