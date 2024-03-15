import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function ListOptions() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Titulo", headerName: "Título", width: 150 },
    { field: "Autor", headerName: "Autor", width: 150 },
    {
      field: "Fecha_de_publicacion",
      headerName: "Fecha de publicación",
      type: "Date",
      width: 230,
    },
  ];

  const rows = [
    { id: 1, Titulo: "Snow", Autor: "Jon", Fecha_de_publicacion: '11/7/2022' },
    { id: 2, Titulo: "Snow", Autor: "Jon", Fecha_de_publicacion: '11/7/2022' },
    { id: 3, Titulo: "Snow", Autor: "Jon", Fecha_de_publicacion: '11/7/2022' },
    { id: 4, Titulo: "Snow", Autor: "Jon", Fecha_de_publicacion: '11/7/2022' },
    { id: 5, Titulo: "Snow", Autor: "Jon", Fecha_de_publicacion: '11/7/2022' },
    { id: 6, Titulo: "Snow", Autor: "Jon", Fecha_de_publicacion: '11/7/2022' },
    { id: 7, Titulo: "Snow", Autor: "Jon", Fecha_de_publicacion: '11/7/2022' },
    { id: 8, Titulo: "Snow", Autor: "Jon", Fecha_de_publicacion: '11/7/2022' },
    { id: 9, Titulo: "Snow", Autor: "Jon", Fecha_de_publicacion: '11/7/2022' },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
