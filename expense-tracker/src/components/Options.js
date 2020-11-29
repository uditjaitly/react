import React from 'react';
import Option from './Option.js'
export default class Options extends React.Component{
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