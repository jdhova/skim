
import React, { Component } from 'react'
import factorial from './algorithms/factorial'
import '../App.css';

class factorials extends Component {
    constructor(props){
        super(props)
            this.state = {
                value : '',
                finalValue :''
            }
        }

        handleChange = (e) => {
            this.setState({value: (e.target.value)})         
        }
        onSubmit = (e) => {
            e.preventDefault()
            this.setState ({finalValue: this.state.value})
            this.setState({value: ''})    
        }

        render() { 
            const strval = this.state.finalValue
            const intval = parseInt(strval)
        
            return (
              <div className = 'input'> 
                    <form className="form-inline">
                        <div className="form-group mx-sm-3 mb-2">
                        <label className="sr-only">Enter integer</label>
                        <input type="number" className="form-control" value = {this.state.value} onChange = {this.handleChange}  placeholder="Enter Integer" />
                        </div>
                        <button type="submit" onClick = {this.onSubmit} className="btn btn-primary mb-2">Submit</button>
                    </form>
                    <h3 className='fac'>
                         {factorial(intval)}
                    </h3>
              </div>
            )
          }
    }

  
export default factorials

