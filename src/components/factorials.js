
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
                   

                    <form className="form-inline">
                        <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="inputPassword2" className="sr-only">Enter integer</label>
                        <input type="text" className="form-control" value = {this.state.value} onChange = {this.handleChange}  placeholder="Enter Integer" />
                        </div>
                        <button type="submit" onClick = {this.onSubmit} className="btn btn-primary mb-2">Submit</button>
                    </form>

                    <h3 >
                 {factorial(intval)}
                        </h3>

              </div>
            )
          }
    }

  


export default factorials

