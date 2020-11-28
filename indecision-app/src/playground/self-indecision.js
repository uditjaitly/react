class Indecision extends React.Component{
    constructor (props){
        super(props);
        this.title="Indecision App"
        this.subtitle="Let the computer make the decision for you"
        this.state={
            options:["one","two"]
        }
        this.onRemoveHandler=this.onRemoveHandler.bind(this)
        this.onActionAdd=this.onActionAdd.bind(this)
        this.onActionHandler=this.onActionHandler.bind(this)
        this.onDeleteHandler=this.onDeleteHandler.bind(this)
    }

    componentDidMount(){
        try{
            const json=localStorage.getItem('options')
        const options=JSON.parse(json)
        this.setState(()=>{
            return{
                options:options
            }
        })
        }
        catch(e){

        }

        
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length!=this.state.options.length){
            const json= JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
        
    }

    onActionHandler(){
        let randTask = Math.floor(Math.random()*this.state.options.length)
        let task=this.state.options[randTask]
        alert(task)
    }

    onRemoveHandler(){
        this.setState(()=>{
            return{
                options:[]
            }
        })
    }
    onActionAdd(item){
        if(this.state.options.indexOf(item)>-1){
            return "Please Enter A Non Duplicate Item"
        }
        this.setState((prevState)=>{
     
            return{
                options:prevState.options.concat(item)
            }
        })
    }
    onDeleteHandler(optionToDelete){
        this.setState((prevState)=>{
            return{
                options:prevState.options.filter((option)=>{
                    return option!=optionToDelete
                })
            }
        })
    }
    render(){
        return(
            <div>
                <Header
                    title={this.title}
                    subtitle={this.subtitle}
                />
                <Action
                    onAction={this.onActionHandler}
                    onRemove={this.onRemoveHandler}
                    noOptions={this.state.options.length<=0}
                />
                <Options
                    options={this.state.options}
                    onDeleteOne={this.onDeleteHandler}
                />
                <AddOptions
                    onAdd={this.onActionAdd}
                />


            </div>
        );
    }
}

const Header = (props) => {
    return(
        <div>
            <h1> {props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

class Action extends React.Component{
    render(){
        return(
            <div>
                <button disabled={this.props.noOptions} onClick={this.props.onAction}>Pick a random task</button>
                <button onClick={this.props.onRemove}>Remove all options</button>
            </div>
            
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
                {this.props.options.map((option)=>{
                    return <Option key={option} option={option} onDeleteOne={this.props.onDeleteOne}/>
                })}
            
            </div>

        );
    }
}

class Option extends React.Component{
    constructor(props){
        super(props);
        this.delete=this.delete.bind(this)
    }
    delete(e){
        this.props.onDeleteOne(this.props.option)
    }
    render(){
        return(
            <div>{this.props.option}
                <button onClick={this.delete}>x</button>
            </div>
            
        );

    }
}

class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.addingOption=this.addingOption.bind(this)
    }


    addingOption(e){
        e.preventDefault();
        let item=e.target.elements.optionText.value.trim();
        if(item){
            let error=this.props.onAdd(item)
            e.target.elements.optionText.value="";
            if(error){
                alert(error)
            }
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.addingOption}>
                    <input type="text" name="optionText"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}




ReactDOM.render(<Indecision/>,document.getElementById("app"))