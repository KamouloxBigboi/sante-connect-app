
import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import backGround from '../img/background_connexion.jpeg'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast} from "react-toastify";
import Footer from '../components/footer';
  
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/about">
        Santé Connect
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
  
const theme = createTheme();

export default function SignIn() {

  const navigate = useNavigate()
  const [values, setValues] = useState({email: "", password: ""})

// Générateur d'erreur avec toast pour l'affichage

  const generateError = (err) => {
    toast.error(err, {
      position: "bottom-right",
    });
  };

  // Fonction enregistrement utilisateur asynchrone dans la base de donnée
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const { data } = await axios.post(
          "http://localhost:5000/login", 
        {
          ...values,
        },
        {
          withCredentials: true,
        }
       );

      console.log(data)
      if (data) {
        if (data.errors) {
          const {email, password} = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
        navigate("/dashboard")
      }
    } 
  } catch (err) {
    console.log(err);
  }
};

  return (
    
    <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}  
            md={7}
            sx={{
              backgroundImage: `url(${backGround})`,
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Connectez-vous 
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Adresse Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(event)=>
                      setValues({...values, [event.target.name]: event.target.value })
                    }
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Mot de Passe"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(event)=>
                      setValues({...values, [event.target.name]: event.target.value })
                    }
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Se Rappeler de moi "
                />
                <Button 
                  // href="/"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Connexion
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/" variant="body2">
                      Mot de passe oublié ?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Pas de compte ? Inscrivez-vous "}
                    </Link>
                  </Grid>
                </Grid>
                <ToastContainer />
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Footer />
      </ThemeProvider>
  ); 
}