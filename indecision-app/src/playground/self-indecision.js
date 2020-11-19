class Indecision extends React.Component{
    constructor (props){
        super(props);
        this.title="Indecision App"
        this.subtitle="Let the computer make the decision for you"

    }



    render(){
        return(
            <div>
                <Header
                title={this.title}
                subtitle={this.subtitle}
                />
                <Action/>
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
const Action = 




ReactDOM.render(<Indecision/>,document.getElementById("app"))