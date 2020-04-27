// Debo reinicializar estados
const initialState = { palabra: ''}

// Action es el valor devuelto por el action
// action.payload será el valor que quiero añadir, borrar, etc
export default (state = initialState, action) => {
    // Modifica de forma efectia lo que hay en la store, después de recoger el recado
    // de lo que hay que modificar de parte del action
    if(action.type === 'UPDATE_WORD') {
        return {
            // Lo que devuelve un reducer es lo que se quedará en el store si el acttion type
            // es 'UPDATE_WORD'
            ...state,
            palabra: action.payload
        }
    }

    return state
}

export const selectActiveWord = state => state.palabraReducer.palabra