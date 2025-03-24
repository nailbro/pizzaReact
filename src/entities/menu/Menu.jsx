import './Menu.scss'
import menu from './image 10.png'
const Menu = () => {
  return (
    <div className='Menu'>
      <img src={menu} alt="" />
<div>
<h2>С креветками и трюфелями</h2>
<p>Домашнаяя паста феттуччине, 
  <br />сливочный соус, креветки, 
  <br />трюфельное масло, черный 
  перец, <br />пармезан.350 г
</p>
<div className='daa'>
<h2>от 600 ₽</h2> <button>В корзину</button>
</div>

</div>
    </div>
  )
}

export default Menu
