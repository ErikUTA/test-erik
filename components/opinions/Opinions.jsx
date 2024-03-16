import React, { useState } from "react";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers";
import {
  Alert,
  Button,
  Collapse,
  Grid,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import axios from "axios";

export default function Opinions() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    Titulo: "",
    Autor: "",
    Fecha: "",
    Contenido: "",
  });

  const sendInfo = () => {
    if (!!!data.Titulo | !!!data.Contenido | !!!data.Autor || !!!data.Fecha) {
      setOpen(true);
    } else {
      setOpen(false);
      axios
        .post("http://localhost:8080/api/addComment", data)
        .then((response) => {
          console.log("Enviado correctamente", response);
        });
      setData({ ...data, Titulo: "", Autor: "", Fecha: "", Contenido: "" });
    }
  };

  return (
    <Grid container spacing={2} className="form">
      <Grid container className="center">
        <h1 style={{color: 'black'}}>Comentarios</h1>
      </Grid>
      <Grid item xs={6}>
        <TextField
          className="textField"
          name="titulo"
          label="Título:"
          variant="standard"
          value={data.Titulo}
          onChange={(e) => setData({ ...data, Titulo: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          className="textField"
          name="autor"
          label="Autor:"
          variant="standard"
          onChange={(e) => setData({ ...data, Autor: e.target.value })}
          value={data.Autor}
        />
      </Grid>
      <Grid item xs={6}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            className="textField"
            name="fechas"
            label="Fecha de publicación:"
            renderInput={(params) => <TextField {...params} />}
            onChange={(newValue) => {
              setData({ ...data, Fecha: newValue.toString() });
            }}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={6}>
        <TextField
          className="textField"
          name="contenido"
          value={data.Contenido}
          label="Contenido:"
          variant="standard"
          onChange={(e) => setData({ ...data, Contenido: e.target.value })}
        />
      </Grid>
      <Grid container className="center" style={{ marginTop: "3%" }}>
        <Button variant="contained" onClick={sendInfo}>
          Enviar
        </Button>
      </Grid>
      <Box sx={{ width: "100%" }}>
        <Collapse in={open}>
          <Alert
            severity="warning"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                X
              </IconButton>
            }
            sx={{ mt: 2 }}
          >
            Por favor, completar el formulario.
          </Alert>
        </Collapse>
      </Box>
    </Grid>
  );
}
