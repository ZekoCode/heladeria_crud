import React from 'react'
import ListSales from './ListSales'
import './Form.css'

function Form(){

    return(
        <>
            <div className='container--form'>
                <form className='form'>
                    <label className='form--label'> Productos</label>
                    <select className='form--selectInput' id="input1" name="categoria">
                        <option value=""></option>
                        <option value="torta">Torta</option>
                        <option value="sandwitch">Sandwitch</option>
                        <option value="paleta_helada">Paleta helada</option>
                        <option value="cono_helado">Cono helado</option>
                    </select>
                    
                    <select className='form--selectInput' id="input2" name="sabor">
                        <option value=""></option>
                        <option value="chocolate">Chocolate</option>
                        <option value="vainilla">Vainilla</option>
                        <option value="menta">Menta</option>
                        <option value="oreo">Oreo</option>
                    </select>
                    <label className='form--label'>Costo individual</label>
                    <input className='form--textInput' id="input3" type="number" name="costo" step="0.1" min="0"/>
                    <label className='form--label'>Cantidad a comprar</label>
                    <input className='form--textInput' id="input4" type="number" name="cantidad"/>
                    <input className='form--submitInput' type="submit" value="Enviar"/>
                </form>
            </div>
            <ListSales/>
        </>
    )
}

export default Form