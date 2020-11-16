class IndecisionApp extends React.Component{
    render(){
        const title="Indecision App"
        const subtitle="Let the computer decide your fate"
        const options=['one','two','four']
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOptions/>
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
                <button>Let the computer decide for you</button>
            </div>

        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
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
    render(){
        return(
            <div>
                {<p>Add Option Component Here</p>}

            </div>


        );
    }
}




ReactDOM.render(<IndecisionApp/>,document.getElementById("app"))