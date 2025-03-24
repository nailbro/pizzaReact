import React from 'react'
import './Pizzamenu.scss'
import Menu from '../entities/menu/Menu'

const Pizzazmenu = () => {
  return (
    <section className='mens'> 
        <div className='mens__container container'>
       <h2 className='past'>Паста</h2>
       <div className='mens__wrapper'>
       <Menu/>
       <Menu/>
       <Menu/>
       <Menu/>
       </div>
       <div className="mens__wrapper2">
       <Menu/>
       <Menu/>
       <Menu/>
       <Menu/>
       </div>
    </div>
    </section>
  )
}

export default Pizzazmenu
