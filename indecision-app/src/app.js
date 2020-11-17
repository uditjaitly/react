class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.deleteOptions=this.deleteOptions.bind(this)
        this.addOption=this.addOption.bind(this)
        this.handlePick=this.handlePick.bind(this)
        this.state={
            options:['one','two','four']
        }
    }



    deleteOptions(){
        this.setState(()=>{
            return{
                options:[]
            };
        })
    }
    addOption(option){
        if(this.state.options.indexOf(option) > -1){
            return 'this option already exists'
        }
        this.setState((prevState)=>{
            return{
                options:prevState.options.concat(option)
            }
        })
    }
    handlePick(){
        let rand=Math.floor(Math.random()*this.state.options.length)

        alert(`Element Picked is ${this.state.options[rand]}`)
    }
    render(){
        


        const title="Indecision App"
        const subtitle="Let the computer decide your fate"
        
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length>0}
                    pick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    delete={this.deleteOptions}
                />
                <AddOptions
                    addOption={this.addOption}
                />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>    
        );
    }
}

class Action extends React.Component{
    
    render(){
        return(
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.pick}>Let the computer decide for you</button>
            </div>

        );
    }
}

class Options extends React.Component{

   
    render(){
        return(
            <div>
                <button onClick={this.props.delete}>Remove Items</button>
                {
                    
    
                    this.props.options.map((option)=>
                        <Option key={option} optionText={option}/>
                    )
                }
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                {
                    <p>{this.props.optionText}</p>
                    
                }

            </div>
        )
    }
}

class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.addOptionHandler=this.addOptionHandler.bind(this);
        
    }


    addOptionHandler(e){
        e.preventDefault();
        let item=e.target.elements.task.value.trim();
        if(item){
            const error=this.props.addOption(item);
            e.target.elements.task.value="";
            if(error){
                alert("duplicate")
            }
        }
        
    }
    render(){
        return(
            <div>
                <form onSubmit={this.addOptionHandler}>
                    <input type="text" name="task">
                    </input>
                    <button>Add task</button>
                </form>
                

            </div>


        );
    }
}




ReactDOM.render(<IndecisionApp/>,document.getElementById("app"))