import React from 'react';
export default class AddOptions extends React.Component{
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