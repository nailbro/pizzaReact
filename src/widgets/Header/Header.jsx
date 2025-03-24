import './Header.scss'
import log from './Rectangle 76.png'

const Header = () => {
  return (
    <header className='header'>
      <div className="header__container container">
        <div className="header__top">
            <img src={log} alt="" />
            <h4>Доставка пасты <span>Москва</span></h4>
            <button>Заказать звонок</button>
            <h3>8 499 391-84-49</h3>

        </div>
        <div className="header__bottom">
            <ul>
                <li>Пицца</li>
                <li>Паста</li>
                <li>Супы</li>
                <li>Салаты</li>
                <li>Напитки</li>
                <li>Десерты</li>
                <li>Бакалея</li>
                <li>Антипасти</li>
                <li>Акции</li>
                <li>Комбо</li>
                <li>Контакты</li>
            </ul>
            <h3>Войти</h3>
            <button>Корзина</button>
        </div>
      </div>
    </header>
  )
}

export default Header
