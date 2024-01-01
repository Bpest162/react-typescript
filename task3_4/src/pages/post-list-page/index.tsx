import PostCard from 'entities/ui/post-card';
import './index.scss';
    
const PostList = () =>{
    return <div className='post-list-section'>
        <h2 className='post-list-title'>Post List</h2>
        <PostCard/>
    </div>
}

export default PostList;