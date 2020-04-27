const updateWord = (palabra) => { 
    // Método que recibe como parámetro de entrada lo que quiero actualizar.
    // Devuelve un objeto con dos parámetros, type identifica la operación hago, 
    // el payload es lo que voy a modificar
    return {
        type: 'UPDATE_WORD',
        payload: palabra
    }
}

export default updateWord