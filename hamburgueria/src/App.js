import Combo from "./img/combo.png"
import Navlogo from "./img/logo2.png"
function App() {
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
      <img className="combo" src={Combo} alt="Combo1" title="Combo1" />
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
