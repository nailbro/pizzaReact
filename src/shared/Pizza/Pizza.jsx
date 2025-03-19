import './Pizza.scss'
import pizza from './image1.png'

const Pizza = () => {
  return (
    <div className='pizza'>
      <img src={pizza} alt="" />
      <div>
        <h4>Карбонара</h4>
        <h5>от 120 ₽</h5>
      </div>
    </div>
  )
}

export default Pizza
