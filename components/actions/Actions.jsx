export const saveInput = async (previousState, formData) => {
  const titulo = formData.get("Titulo");
  const autor = formData.get("Autor");
  const fecha = formData.get("Fecha");
  const contenido = formData.get("Contenido");
  return {
    Titulo: titulo ?? titulo.toString(),
    Autor: autor ?? autor.toString(),
    Fecha: fecha ?? fecha.toString(),
    Contenido: contenido ?? contenido.toString(),
  };
};
