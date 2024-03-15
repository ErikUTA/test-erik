import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';
import { TextField } from "@mui/material";
import { saveInput } from "../actions/Actions";

export default function Opinions() {
    const [selectedDate, setSelectedDate] = useState('');
    const [data, formAction] = useFormState(saveInput, null);

    useEffect(() => { 
      console.log(data);
    }, [data]);

    return (
      <form
        className="form"
        action={formAction}
      >
        <TextField id="titulo" label="Título:" variant="standard" />
        <TextField id="autor" label="Autor:" variant="standard" />
        <TextField id="contenido" label="Contenido:" variant="standard" />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker 
                id='fechas'
                label='Fecha de publicación:'
                renderInput={(params) => <TextField {...params} />}
                value={selectedDate}
                onChange={(newValue) => { setSelectedDate(newValue) }}
            />
        </LocalizationProvider>
      </form>
    );
}