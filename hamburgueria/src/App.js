import Combo from "./img/combo.png"

function App() {
  return (
    <div className="Conteiner">
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
