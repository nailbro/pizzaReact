import './New.scss'
import Pizza from '../../shared/Pizza/Pizza'

const New = () => {
  return (
    <section className='new'>
      <div className="new__container container">
        <h2>Новинки</h2>
        <div className="new__wrapper">
        <Pizza/>
        <Pizza/>
        <Pizza/>
        <Pizza/>
        </div>
      </div>
    </section>
  )
}

export default New
