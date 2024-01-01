import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "shared/api/posts-api/index";
import './index.scss';

const PostCards = () =>{
    const { data, error, isLoading} = useQuery({
        queryKey: ["posts"],
        queryFn: getAllPosts,
        refetchOnWindowFocus: false
    });

    if(error) return <p>Error!</p>
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

export default PostCards;