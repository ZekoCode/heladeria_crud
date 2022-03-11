import React from 'react'
import ListSales from './ListSales'
import './Form.css'

function Formulario(){

    return(
       <div>
            <form>
            <label> Productos</label>
            <select id="input1" name="categoria">
                <option value=""></option>
                <option value="torta">Torta</option>
                <option value="sandwitch">Sandwitch</option>
                <option value="paleta_helada">Paleta helada</option>
                <option value="cono_helado">Cono helado</option>
            </select>

            <label> Sabores</label>
            <select id="input2" name="sabor">
                <option value=""></option>
                <option value="chocolate">Chocolate</option>
                <option value="vainilla">Vainilla</option>
                <option value="menta">Menta</option>
                <option value="oreo">Oreo</option>
            </select>
        
            <input id="input3" placeholder="Costo individual" type="number" name="costo" step="0.1" min="0"/>
            <input id="input4" placeholder="Cantidad a comprar" type="number" name="cantidad"/>
            <input type="submit" value="Enviar"/>
        </form>
        <ListSales/>
       </div>
    )
}

export default Formulario