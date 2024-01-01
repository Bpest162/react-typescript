import PostCards from 'entities/posts-list/index';
import CreatePosts from 'entities/posts-list/ui/newPost';
import './index.scss';
    
const PostsPage = () =>{
    return <div className='post-list-section'>
        <h2 className='post-list-title'>Post List</h2>
        <CreatePosts/>
        <PostCards/>
    </div>
}

export default PostsPage;