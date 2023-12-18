import React from 'react'
import './CartDropdown..scss'
import ButtonComponent from '../button/buttonComponent'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'/>
        <ButtonComponent>CheckOUT</ButtonComponent>
       
    </div>
  )
}

export default CartDropdown