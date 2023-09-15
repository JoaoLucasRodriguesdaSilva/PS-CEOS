import {register} from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import Hero1 from "./img/Hero1.png"
import Combo from "./img/combo.png"
import Hero2 from "./img/Hero2.png"
import Hero3 from "./img/Hero3.png"
import Navlogo from "./img/logo2.png"

register();

function App() {
const data = [
  {id: '1', image: Combo},
  {id: '2', image: Hero1},
  {id: '3', image: Hero2},
  {id: '4', image: Hero3}
]

  return (
    <div className="Conteiner">
      <div className="topo">
        <div className="navbar">
          <img src={Navlogo} className="imgnav" alt="logo" />
          <ul>
            <button>Delivery</button>
            <button>Cupons</button>
            <button>Menu</button>
            <button>Restaurantes</button>
            <button>Trabalhe Conosco</button>
          </ul>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        pagination={{clickable: true}}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt='slider' className='slide-item' />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="produtos">
        <h1>Cards Produtos</h1>
      </div>
      <div className="sobrenos">
        <h1>Sobre nós</h1>
      </div>
      <div className="contatenos">
        <h1>Contate-nos</h1>
      </div>
    </div>
  );
}

export default App;
