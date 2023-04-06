import { useNavigate } from 'react-router-dom';
import removeCookie from 'react-cookie'
import axios from 'axios';

export default function useLogout() {
    
    let navigate = useNavigate();

    const logoutUser = async () => {
        try {
           await axios({
                method: 'GET',
                url: '/logout',
            }).then(res => { 
                console.log(res);
                removeCookie("jwt"); 
                navigate('/login');
            })
        } catch(err) {
            console.log(err);
        } 
    }

    return {
        logoutUser
    }

}