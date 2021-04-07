function Titulos() {
    return (
        <h1>Este título foi feito em React com JSX</h1>
    );
}

 ReactDOM.render(Titulos(), container);

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
            <h1>Vote no seu preferido!</h1>
            <Contador titulo="React" />
            <Contador titulo="Angular" />
            <Contador titulo="VueJS" />
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), container);