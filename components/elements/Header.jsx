import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
      <Grid className="navbar center">
        <img className='logo-header' src="../../src/assets/movies.png" />
        <Link to={'/listOpinions'} className="menu-item">
          Lista de comentarios
        </Link>
        <Link  to={'/'} className="menu-item">
          Agregar un comentario
        </Link>
      </Grid>
    );
}