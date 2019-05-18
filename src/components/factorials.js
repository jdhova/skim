
import React, { Component } from 'react'
import factorial from './algorithms/factorial'

class factorials extends Component {
    constructor(props){
        super(props)
            this.state = {
                value : '',
                finalValue :''
            }
        }

        handleChange = (e) => {
            // handle if value is integer here
            this.setState({value: e.target.value})
            // console.log('whattts', this.state.value)
        }
    

        onSubmit = (e) => {
            e.preventDefault()
            this.setState ({finalValue: this.state.value})
            // console.log('heheh', this.state.finalValue)
            this.setState({value: ''})
                      
            
        }

       

        render() { 

            const strval = this.state.finalValue
            const intval = parseInt(strval)
        
            return (
              <div className = 'input'> 
                    <form >
                        <input type="text" value = {this.state.value} onChange = {this.handleChange}  placeholder = 'enter integer'/> 
                        <button onClick = {this.onSubmit} type="button" className="btn btn-primary">Enter Integer</button>  
                    </form>  

                    <h2 >
{/*                  
                 {factorial(this.state.finalValue)} */}
                 {factorial(intval)}
                        </h2>

              </div>
            )
          }
    }

  


export default factorials

