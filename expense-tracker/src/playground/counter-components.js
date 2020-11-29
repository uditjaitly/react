class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:props.count
        }
        this.handleAdd=this.handleAdd.bind(this);
        this.handleSub=this.handleSub.bind(this);
        this.handleReset=this.handleReset.bind(this);
    }
    handleAdd(){

        this.setState((prevState)=>{
            return{
                count:prevState.count+1
            }
        });
    }
    handleSub(){
        this.setState((prevState)=>{
            return{
                count:prevState.count-1
            }
        })
    }
    handleReset(){
        this.setState((prevState)=>{
            return{
                count:0
            }
        })
    }



    render(){
        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAdd}>+1</button>
                <button onClick={this.handleSub}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>



        );
    }
}
Counter.defaultProps={
    count:24
}

ReactDOM.render(<Counter count={23}/>,document.getElementById("app"))