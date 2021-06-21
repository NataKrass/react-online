import React, { Component } from 'react';

import './input.css';


export default class Input extends Component{
    constructor(props){
        super(props)
        this.inputFirst = React.createRef()
        this.inputSec = React.createRef()
        //this.focusTextInput = this.focusTextInput.bind(this)
        this.state = { 
            value: '',
            operator: '',
            number: '' 
        }
    }


    handleChangeOperator = e => {
        const operatorNumb = e.target.value.replace(/\D/g, '')
        const operator = operatorNumb.slice(0, 2)

        this.setState({value: operator})
        if(operatorNumb.length >= 2) {
            switch(true) {
                case [67, 68, 97, 98, 96].includes(Number(operator)):
                    this.setState({operator: 'Kyivstar'})
                    break
                case [50, 66, 99].includes(Number(operator)):
                    this.setState({operator: 'Vodafone'})
                    break
            }
            this.inputSec.current.focus()

        } else {this.setState({operator: ''})}
        
     }

    handleChangeNumber = e => {
        const numberValue = e.target.value.replace(/\D/g, '')
        const number = numberValue.slice(0, 7)
        this.setState({number: number})
    }
    
  focusTextInput() {
    this.inputSec.current.focus();
  }
  
  componentDidMount() {
    this.inputFirst.current.focus();
  }

     render(){
        return <div>
            <span className="operator-name">{this.state.operator} </span>
            <span>+38 0</span>
            <input 
                type="text" 
                className="operator-input"
                ref={this.inputFirst}
                onInput={this.handleChangeOperator.bind(this)}
                value={this.state.value}
                />
            <span className="check-icon"> 
            {' '}
            {this.state.value.length === 2 && this.state.number.length === 7 ? '✔️' : '-'}
             {' '} 
             </span>
            <input type="text" 
                className="phone-input"
                ref={this.inputSec}
                onInput={this.handleChangeNumber.bind(this)}
                value={this.state.number}
                 />
        </div>
    }
}