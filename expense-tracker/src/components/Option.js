import React from 'react';

export default class Option extends React.Component{
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