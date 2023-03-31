import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, 
         ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast} from "react-toastify";
import Footer from '../components/footer';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="localhost:3000/about">
        Santé Connect
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const navigate = useNavigate()
  
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    password: "",
    gender: "",
    occupation: "",
    country: "",
  })

// Générateur d'erreur avec toast pour l'affichage

  const generateError = (err) => {
    toast.error(err, {
      position: "bottom-right",
    });
  };

  // Fonction enregistrement utilisateur dans la base de donnée asynchrone

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const { data } = await axios.post(
          "http://localhost:5000/sign-up", 
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
        navigate("/sign-in")
      }
    } 
  } catch (err) {
    console.log(err);
  }
};

  return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 10,  
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Inscription 
            </Typography>
            <Box component="form" onSubmit={(event) => handleSubmit(event)} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete=" Prénom "
                    name="firstname"
                    required
                    fullWidth
                    id="firstname"
                    label=" Prénom "
                    autoFocus
                    onChange={(event)=>
                      setValues({...values, [event.target.name]: event.target.value })
                    } 
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastname"
                    label=" Nom "
                    name="lastname"
                    autoComplete=" Nom "
                    onChange={(event)=>
                      setValues({...values, [event.target.name]: event.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label=" Adresse Email "
                    name="email"
                    autoComplete=" Adresse Email "
                    onChange={(event)=>
                      setValues({...values, [event.target.name]: event.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="age"
                    label=" Age "
                    type="age"
                    id="age"
                    autoComplete=" Age (Obligatoire et avoir au moins 16 ans) "
                    onChange={(event)=>
                      setValues({...values, [event.target.name]: event.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label=" Mot de Passe "
                    type="password"
                    id="password"
                    autoComplete=" Mot de passe "
                    onChange={(event)=>
                      setValues({...values, [event.target.name]: event.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="gender"
                    label=" Sexe ou genre"
                    type="gender"
                    id="gender"
                    autoComplete="Sexe ou Genre (facultatif)"
                    onChange={(event)=>
                      setValues({...values, [event.target.name]: event.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="occupation"
                    label=" Profession"
                    type="occupation"
                    id="occupation"
                    autoComplete=" Profession (facultatif)"
                    onChange={(event)=>
                      setValues({...values, [event.target.name]: event.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="country"
                    label=" Pays "
                    type="country"
                    id="country"
                    autoComplete=" Pays "
                    onChange={(event)=>
                      setValues({...values, [event.target.name]: event.target.value })
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                S'inscrire
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="./sign-in" variant="body2">
                    Déjà un compte chez Santé Connect ? <br/> Connectez-vous !
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <ToastContainer />
          <Copyright sx={{ mt: 5 }} />
        </Container>
        <Footer />
      </ThemeProvider>
  );
};