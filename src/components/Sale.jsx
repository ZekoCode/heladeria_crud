import React from 'react'
import './Sale.css'

function Sale() {


  return (
    <div className='sale'>
      <div className='sale--info'>
        <p>Producto:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Torta</p>
        <p>Sabor:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chocolate</p>
        <p>Cantidad:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2</p>
        <p>Costo:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.5</p>
        <p>Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7$</p>
      </div>
      <div className='sale--action'>
        <button className='sale--action__button sale--action__delete'>Eliminar</button>
        <button className='sale--action__button sale--action__edit'>Editar</button>
      </div>
    </div>
  )
}

export default Sale