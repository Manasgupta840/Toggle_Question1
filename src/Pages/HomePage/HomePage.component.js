import {useNavigate} from 'react-router-dom'

const HomePage =()=>{
    const navigate = useNavigate();
    const InstaURL=()=>{
        navigate('/Instagram');
    }
    const LinkedinURl=()=>{
        navigate('/Linkedin');
    }
    const YoutubeURL=()=>{
        navigate('/Youtube');
    }
    return (
        <div>
            <h1>Welcome on Manas's Webpage</h1>
            <button onClick={InstaURL}>Go to Instagram Account link</button><br></br>
            <button onClick={LinkedinURl}>Go to Linkedin Account link</button><br></br>
            <button onClick={YoutubeURL}>Go to Youtube Account link</button>
        </div>
    )
}
export default HomePage;