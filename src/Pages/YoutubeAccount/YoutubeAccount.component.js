import {useNavigate} from 'react-router-dom'

const Youtube =()=>{
    const navigate = useNavigate();
    const HomePage=()=>{
        navigate('/');
    }
    
    return (
        <div>
            <h1>Here is the link of Youtube Account</h1>
            <button onClick={HomePage}>Go to HomePage</button><br></br>
            <a target="_blank" href="https://www.youtube.com/channel/UCkhA3HM8UOuX_Y_JhG4KvPQ">YouTube</a>&nbsp; 

        </div>
    )
}
export default Youtube;