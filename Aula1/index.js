var container = document.getElementById("app")

function Contador(props) {

    let numero = 0
    
    function somar() {
        numero++;
        console.log(numero)
    }
    
    function subtrair() {
        numero--;
        console.log(numero)
    }

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    );
}

function App() {
    return (
        <React.Fragment>
            <h1>Escolha quais deseja comprar:</h1>
            <Contador titulo="Fundos" />
            <Contador titulo="Ações" />
            <Contador titulo="Tesouros" />
            <Contador titulo="Letras" />
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), container);