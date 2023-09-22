import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'
import {register} from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import Hero1 from "./img/Hero1.png"
/*import Combo from "./img/combo.png"*/
import Hero2 from "./img/Hero2.png"
import Hero3 from "./img/Hero3.png"
import Navlogo from "./img/logo2.png"
import CardSlider from './CardSlider'
import validacao from './validacao'
import './index.css'
import React from 'react'
import { useState } from 'react'
import cardapio1 from "./img/cardapio/REAL_MOSTARDA.png"
import cardapio2 from "./img/cardapio/REAL_AMERICANO.png"
import cardapio3 from "./img/cardapio/REAL_BACON.png"
import cardapio4 from "./img/cardapio/REAL_CHICKEN.png"
import cardapio5 from "./img/cardapio/REAL_DELUXE.png"
import cardapio6 from "./img/cardapio/REAL_DUPLO.png"
import cardapio7 from "./img/cardapio/REAL_WHOPPER.png"
import cardapio8 from "./img/cardapio/SHAKE_CEOS.png"
import banner from "./img/banner_semana_hamburguer.png"



register();

function App() {
const data1 = [
  { id: '1', image: cardapio1 },
  { id: '2', image: cardapio2 },
  { id: '3', image: cardapio3 },
  { id: '4', image: cardapio4 },
  { id: '5', image: cardapio5 },
  { id: '6', image: cardapio6 },
  { id: '7', image: cardapio7 },
  { id: '8', image: cardapio8 }
]
const data = [
  {id: '1', image: banner},
  {id: '2', image: Hero1},
  {id: '3', image: Hero2},
  {id: '4', image: Hero3}
]

const [valores, setValores] = useState({
  nome: '',
  email: '',
  mensagem: ''
})

function mudanca(event) {
  const newObj = {...valores, [event.target.name]: event.target.value}
  setValores(newObj)
}

const [erros,setErros] = useState({})

function envio(event) {
  event.preventDefault();
  setErros(validacao(valores));
}

  return (
    <div className="Conteiner">
      <div className="topo">
        <div className="navbar">
          <img src={Navlogo} className="imgnav" alt="logo" />
          <ul>

          <button id="navbutton"><a href='#hero'>Delivery</a></button>
            <button class="nav2" id="navbutton"><a href='#aboutus'class="nav2">Sobre Nós</a></button>
            <button class="nav3" id="navbutton"><a href='#aboutus'class="nav3">Menu</a></button>
            <button class="nav4" id="navbutton"><a href='#contatenos'class="nav4">Fale Conosco</a></button>
          </ul>

        </div>
      </div>
      <Swiper
        id='hero'
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

      <section Class="aboutus" id="aboutus">
        <div Class="sobrenos">

          <h1 Class="titulo-aboutus">Nossa História</h1>
          <p>Fundada em 2014, a Hamburgueria Sabor Real nasceu da paixão por criar hambúrgueres autênticos e saborosos que encantam o paladar de nossos clientes. Desde o início, nosso compromisso foi servir não apenas hambúrgueres, mas experiências memoráveis de sabor.</p>
          <h2 Class="titulo-aboutus">Nossa Missão</h2>
          <p>Criar hambúrgueres excepcionais que unam a tradição com a inovação. Usamos apenas os ingredientes mais frescos e selecionados, grelhamos nossos hambúrgueres com carinho e servimos com um toque de criatividade que cativa o coração e o estômago de todos que nos visitam.</p>

        </div>
      </section>

      <div Class="slider_cardapio" id='menu'>
        <h1 Class="texto_slider">
          Nosso Cardápio
        </h1>
      </div>
      <CardSlider cards={data1} />
      <section className="contatenos" id="contatenos">
        <div class="container_formulario">
          <div class="formulario_header">Fale Conosco</div>

          <form onSubmit={envio}>
            <label for="nome"class="texto_formulario">Digite o Seu Nome:</label>
            <input type="text" id="nome" name='nome' onChange={mudanca}/>
            {erros.nome && <p class="erro">{erros.nome}</p>}

            <label for="email" class="texto_formulario">Digite o Seu E-mail:</label>
            <input type="text" id="email" name='email' onChange={mudanca}/>
            {erros.email && <p class="erro">{erros.email}</p>}

            <label for="mensagem"class="texto_formulario">Digite a Sua Mensagem:<br></br></label>
            <textarea type="text" id='mensagem' spellCheck="false" name='mensagem' onChange={mudanca}/>
            {erros.mensagem && <p class="erro">{erros.mensagem}</p>}

            <div class='container_envio'>
              <button class="enviar_form">Enviar</button>
            </div>
          </form>

        </div>
      </section>

      <div className='footer'>
          <div className='redessociais'>
            <BsFacebook size={25} className='icone'/>
            <p className='p'>SaborRealOficial</p>
            <BsInstagram size={25} className='icone'/>
            <p className='p'>@SaborRealOficial</p>
            <BsLinkedin size={25} className='icone'/>
            <p className='p'>SaborRealOficial</p>
          </div>

          <div className='colunas'>
            <div className='box'>
              <h3 className='nos'>SABOR REAL</h3>
              <p>Arquitetura</p>
              <p>Localização</p>
              <p>Delivery</p>
            </div>
            <div className='box'>
              <h3 className='nos'>RESTAURANTES</h3>
              <p>Restaurantes próximos</p>
              <h3 className='nos'>NUTRICIONAL</h3>
              <p>Tabela Nutricional</p>
              <p>Alergenicos</p>
            </div>
            <div className='box'>
              <h3 className='nos'>SR NA MÍDIA</h3>
              <h3 className='nos2'>PARA FAZER EM CASA</h3>
              <h3 className='nos2'>PROMOÇÕES</h3>
            </div>
            <div className='box'>
              <h3 className='nos'>SR CASHBACK</h3>
              <h3 className='nos2'>TRABALHE CONOSCO</h3>
            </div>
          </div>
      </div>

    </div>
  );
}

export default App;
