import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import removeCookie from 'react-cookie';
import axios from 'axios';

export default function LogOut() {

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

    useEffect(() => {
        window.addEventListener('beforeunload', logoutUser);
        return () => {
            window.removeEventListener('beforeunload', logoutUser);
        };
    }, []);

    return {
        LogOut
    }
}