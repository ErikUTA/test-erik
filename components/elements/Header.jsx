import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
      <Grid className="navbar center">
        <img className='logo-header' src="https://i.pinimg.com/originals/10/b1/ba/10b1bad21f79df5f462c1c09f12db6ff.jpg" />
        <Link to={'/listOpinions'} className="menu-item">
          Lista de comentarios
        </Link>
        <Link  to={'/'} className="menu-item">
          Agregar un comentario
        </Link>
      </Grid>
    );
}