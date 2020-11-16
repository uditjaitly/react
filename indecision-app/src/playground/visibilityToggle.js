let show=false
const showDetails = () =>{
    if(show==false){
        show=true;
    }
    else{
        show=false;
    }
    
    renderApp()
}

const renderApp = () =>{
    const template=(
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showDetails}>{show ? "Hide" : "Show"} Details
            </button>
            {show && <p>Details</p>}
        </div>
    );

    ReactDOM.render(template,app)
}

const appRoot=document.getElementById("app")

renderApp();