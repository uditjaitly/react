import React from 'react';
export default class Action extends React.Component{
    render(){
        return(
            <div>
                <button disabled={this.props.noOptions} onClick={this.props.onAction}>Pick a random task</button>
                <button onClick={this.props.onRemove}>Remove all options</button>
            </div>
            
        );
    }
}