import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Modal, TextField } from "@mui/material";

export default function ListOptions() {
  const [comments, setComments] = useState([]);
  const [newList, setNewList] = useState([]);
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');

  const handleOpen = (rowText) => {
    setContent(rowText);
    setOpen(true);
  } 
  const handleClose = () => {
    setContent('');
    setOpen(false);
  } 

  useEffect(() => {
    axios.get("https://test-erik-backend-68296a234c9c.herokuapp.com/api/listComments").then((response) => {
      setComments(response?.data);
      setNewList(response?.data);
    });
  }, []);

  const handleChange = (input) => {
    const match = comments.filter(
      (e) =>
        e?.Titulo?.toLowerCase().includes(input.toLowerCase()) |
        e?.Autor?.toLowerCase().includes(input.toLowerCase()) |
        e?.Contenido?.toLowerCase().includes(input.toLowerCase())
    );
    input.length > 0 ? setNewList(match) : setNewList(comments);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#4db5bd',
    border: '0 solid #000',
    boxShadow: 24,
    p: 4,
    color: 'black'
  };

  const columns = [
    { field: "Id", headerName: "ID", width: 70 },
    { field: "Titulo", headerName: "Título", width: 150 },
    { field: "Autor", headerName: "Autor", width: 150 },
    { field: "Fecha", headerName: "Fecha de publicación", width: 230 },
    { field: "Contenido", headerName: "Contenido", width: 230 },
  ];

  return (
    <div className="tcontainer">
      <TextField
        name="filtro"
        label="Busqueda..."
        variant="standard"
        onChange={(e) => handleChange(e.target.value)}
      />
      <DataGrid
        className="table"
        rows={newList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowId={(row) => row.Id}
        onRowClick={(e) => handleOpen(e.row.Contenido)}
      />
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h3>
              Contenido:
            </h3>
            <p className='content'>
              {content}
            </p>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
