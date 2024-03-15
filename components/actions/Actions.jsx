export const saveInput = async (previousState, formData) => {
  const titulo = formData.get("titulo");
  const autor = formData.get("autor");
  const contenido = formData.get("contenido");
  const fecha = formData.get("fecha");
  return {
    titulo: titulo ?? titulo.toString(),
    autor: autor ?? autor.toString(),
    contenido: contenido ?? contenido.toString(),
    fecha: fecha ?? fecha.toString(),
  };
};
