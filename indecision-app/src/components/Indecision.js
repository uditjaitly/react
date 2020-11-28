import React from 'react';
import Action from './Action.js'
import AddOptions from './AddOptions.js'
import Header from './Header.js'
import Options from './Options.js'
import OptionModal from './OptionModal.js'
export default class Indecision extends React.Component{
    constructor (props){
        super(props);
        this.title="Indecision App"
        this.subtitle="Let the computer make the decision for you"
        this.state={
            options:["one","two"],
            selectedOption:undefined
        }
        this.onRemoveHandler=this.onRemoveHandler.bind(this)
        this.onActionAdd=this.onActionAdd.bind(this)
        this.onActionHandler=this.onActionHandler.bind(this)
        this.onDeleteHandler=this.onDeleteHandler.bind(this)
        this.onActionOkay=this.onActionOkay.bind(this)
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
    onActionOkay(){
        this.setState(()=>{
            return{
                selectedOption:undefined
            }
        })
    }
    onActionHandler(){
        let randTask = Math.floor(Math.random()*this.state.options.length)
        let task=this.state.options[randTask]
        this.setState(()=>{
            return{
                selectedOption:task
            }
        })
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
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    onOkay={this.onActionOkay}
                />


            </div>
        );
    }
}