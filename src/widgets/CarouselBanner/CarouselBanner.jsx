
import first from './images/image1.png'
import second from './images/image2.png'


const CarouselBanner = () => {
  return (
    <div className='carouselBanner'>
        <div className="container">
      <img src={first} alt="" />
      <img src={second} alt="" />
      </div>
    </div>
  )
}

export default CarouselBanner
