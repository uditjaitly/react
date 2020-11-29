import React from 'react'
import Modal from 'react-modal'

const OptionModal=(props)=>{
    return(
        <Modal isOpen={!!props.selectedOption} onRequestClose={props.onOkay} contentLabel="SelectedOption" >
            <h3>Selected Item</h3>
            {<p>{props.selectedOption}</p>}
            <button onClick={props.onOkay}>Okay</button>
        </Modal>
    );
}
export default OptionModal