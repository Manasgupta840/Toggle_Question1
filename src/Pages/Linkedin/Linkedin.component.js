import {useNavigate} from 'react-router-dom'

const Linkedin =()=>{
    const navigate = useNavigate();
    const HomePage=()=>{
        navigate('/');
    }
    
    return (
        <div>
            <h1>Here is the link of Linkedin Account</h1>
            <button onClick={HomePage}>Go to HomePage</button><br></br>
           <a target="_blank" href="https://www.linkedin.com/in/manas-gupta-313576179/">Linkedin</a>&nbsp;

        </div>
    )
}
export default Linkedin;