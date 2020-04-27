import React, {useRef} from 'react'
import updateWord from '../../store/palabra/action'
import {connect} from 'react-redux'


const Form = ({ updateWord }) => { // Deconstrucción para obtener updateWord, un componente que
    // accede a un estado de reduz debe recibirlo como prop
    const palabraRef = useRef(null);

    return (
    <div>
        <input type="text" ref={palabraRef}></input>
        <button onClick={ () => updateWord(palabraRef.current.value)}>Guardar en el store</button>
        {/*Función que almacena los datos en el store, no se puede llamar directamente
        entonces se lanzará apenas arranque la situación, entonce se hace una llamada
        desde una función anónima */}
    </div>
    )
}

export default connect(null, { updateWord
 })(Form); // Conexión del componente con redux
// Primer parámetro es para obtener algo de la store, pero está en null, porque sólo modificaré
//  el store