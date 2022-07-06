import {useNavigate} from 'react-router-dom'

const Instagram =()=>{
    const navigate = useNavigate();
    const HomePage=()=>{
        navigate('/');
    }
    
    return (
        <div>
            <h1>Here is the link of InstaAccount</h1>
            <button onClick={HomePage}>Go to HomePage</button><br></br>
            <a target="_blank" href="https://www.instagram.com/__manas__gupta__/">Instagram</a>&nbsp;
        </div>
    )
}
export default Instagram;