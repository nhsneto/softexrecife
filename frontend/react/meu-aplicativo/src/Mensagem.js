import "./Mensagem.css";

function Mensagem(props) {
  return (
    <section>
      <h2 className="Mensagem-titulo">{props.titulo}</h2>
      <p className="Mensagem-paragrafo">
        Aprenda React seguindo este{" "}
        <a
          href="https://pt-br.reactjs.org/tutorial/tutorial.html"
          target="_blank"
          rel="noopener noreferrer"
          className="Mensagem-link"
        >
          tutorial
        </a>
        .
      </p>
    </section>
  );
}

export default Mensagem;
