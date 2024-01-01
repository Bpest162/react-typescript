import { useParams, useNavigate } from "react-router-dom";
import { useUserData } from "entities/users-list/user-card/hook/useUserData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGlobe, faLocationDot, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import './index.scss';


const UserPage = () =>{
    const navigate = useNavigate()
    const { userId } = useParams()

    const { data, isError, isLoading } = useUserData(userId)

    if(isError){
        return <p>Error</p>
    }
    if(isLoading){
        return <p>Loading</p>
    }

    return(
        <div className="user-page">
            <div className="user-card-wrap">
                <button className="btn" onClick={() => navigate(-1)}>Back</button>
                <div className="title">
                    <h1 className="user-name">{data?.data.name}</h1>
                </div>
                
                <div className="el-wrap">
                    <div className="icons">
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: '#969696' }} />
                    </div>
                    <div className="wrapper">
                        <p>{data?.data.email}</p>
                        <span>Email</span>
                    </div>
                </div>
                <div className="el-wrap">
                    <div className="icons">
                        <FontAwesomeIcon icon={faPhone} style={{ color: '#969696' }} />
                    </div>
                    <div className="wrapper">
                        <p>{data?.data.phone}</p>
                        <span>Mobile</span>
                    </div>
                </div>
                <div className="el-wrap">
                    <div className="icons">
                        <FontAwesomeIcon icon={faLocationDot} style={{ color: '#969696' }} />
                    </div>
                    <div className="wrapper">
                        <p>{data?.data.address.city}</p>
                        <p>{data?.data.address.suite}</p>
                        <p>{data?.data.address.street}</p>
                        <span>Work</span>
                    </div>
                </div>
                <div className="el-wrap">
                    <div className="icons">
                        <FontAwesomeIcon icon={faGlobe} style={{ color: '#969696' }} />
                    </div>
                    <div className="wrapper">
                        <p>{data?.data.website}</p>
                        <span>Social Channels</span>
                    </div></div>
                <div className="el-wrap">
                    <div className="icons">
                        <FontAwesomeIcon icon={faNetworkWired} style={{ color: '#969696' }} />
                    </div>
                    <div className="wrapper">
                        <p>{data?.data.company.name}</p>
                        <p>{data?.data.company.catchPhrase}</p>
                        <p>{data?.data.company.bs}</p>
                        <span>Segments</span>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default UserPage;