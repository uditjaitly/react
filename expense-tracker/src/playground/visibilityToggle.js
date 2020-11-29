class Visibility extends React.Component{
    constructor(props){
        super(props);
       
        this.state={
            toggle:false
        }
        this.toggleHandler=this.toggleHandler.bind(this);

    }
    toggleHandler(){
        this.setState((prevState)=>{
            return{
                toggle:!prevState.toggle
            }
        });
        console.log(this.state.toggle)
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleHandler}>{this.state.toggle ? "show more" : "show less"}</button>
                {this.state.toggle ? <p>Text</p> : undefined}
            
            </div>


        );
    }
}

ReactDOM.render(<Visibility/>,document.getElementById("app"))