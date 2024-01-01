import PostCards from 'entities/posts';
import CreatePosts from 'entities/posts/ui/newPost';
import './index.scss';
    
const PostList = () =>{
    return <div className='post-list-section'>
        <h2 className='post-list-title'>Post List</h2>
        <CreatePosts/>
        <PostCards/>
    </div>
}

export default PostList;