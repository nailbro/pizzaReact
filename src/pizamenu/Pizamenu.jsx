import Menu from '../entities/menu/Menu'
import './Pizamenu.scss'
const Pizamenu = () => {
  return (
    <section className='menas'> 
    <div className='menas__container container'>
   <h2 className='past'>Паста</h2>
   <div className='menas__wrapper'>
   <Menu/>
   <Menu/>
   <Menu/>
   <Menu/>
   </div>
   <div className="menas__wrapper2">
   <Menu/>
   <Menu/>
   <Menu/>
   <Menu/>
   </div>
   <h2 className='past'>Паста</h2>
   <div className='menas__wrapper'>
   <Menu/>
   <Menu/>
   <Menu/>
   <Menu/>
   </div>
</div>
</section>
  )
}

export default Pizamenu
