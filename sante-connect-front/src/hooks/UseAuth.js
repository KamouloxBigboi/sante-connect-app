import { useState, useContext } from 'react'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';  

export default function useAuth() {
    let navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [error, setError] = useState(null);

    //set user
    const setUserContext = async () => {
        return await axios.get('/user').then(res => {         
            setUser(res.data.currentUser);  
            navigate('/dashboard');                     
            }).catch((err) => {
            setError(err.response.data);
        })
    }

    //register user 

    const SignUp = async (data) => {
        console.log(data);
        const {firstname, 
               lastname, 
               email,
               age, 
               password, 
               gender, 
               occupation, 
               country} = data;

            return axios.post('/register', {firstname, 
                                            lastname, 
                                            email,
                                            age, 
                                            password, 
                                            gender, 
                                            occupation, 
                                            country})
                .then(async () => {
                    await setUserContext();
                })
                .catch((err) => {
                   return setError(err.response.data);
            })
        };

    //login user 

    const SignIn = async (data) => {
        const { email, password } = data;
            return axios.post('/login', {
                email,
                password,
            }).then(async () => {
                await setUserContext();
            }).catch((err) => {
                setError(err.response.data);
            })
        };

    return {
        SignUp,
        SignIn,
        error
    }
}