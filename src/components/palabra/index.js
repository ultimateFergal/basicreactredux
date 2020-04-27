import React from 'react'
import { selectActiveWord } from '../../store/palabra/reducer'
import {connect} from 'react-redux'

const Palabra = ({ palabra }) => <div>{palabra}</div>

// Nombre de la función que utilizo para acceder a lo que tengo en la store

const mapStateToProps = state => {
    return {
        palabra: selectActiveWord(state)
    }
}

export default connect(mapStateToProps)(Palabra)// Método como parámtro que recupera la información de la store