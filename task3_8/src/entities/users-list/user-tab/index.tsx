import React,{ useState } from "react";
import './index.scss';

const LazyUserAlbums = React.lazy(() => import('./userAlbums/index'));
const LazyUserPosts = React.lazy(() => import('./userPosts/index'));
const LazyUserTodos = React.lazy(() => import('./userTodos/index'))

const UserTab = () =>{
    const [tab, setTab] = useState(1);

    return(
        <div>
            <div className="user-tabs">
                <div className="user-tabs__btns-wrapper">
                    <button onClick={() => setTab(1)} className={ tab === 1 ? 'isActive' : 'user-tabs__btns'}>Albums</button>
                    <button onClick={() => setTab(2)} className={ tab === 2 ? 'isActive' : 'user-tabs__btns'}>Todos</button>
                    <button onClick={() => setTab(3)} className={ tab === 3 ? 'isActive' : 'user-tabs__btns'}>Posts</button>
                </div>
                {tab === 1 && <LazyUserAlbums />}
                {tab === 2 && <LazyUserTodos />}
                {tab === 3 && <LazyUserPosts />}
            </div>
        </div>
        
    )
};
export default UserTab;