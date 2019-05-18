
import React, { Component } from 'react'
// import work from './algorithms/work'


class input extends Component {
    constructor(props){
        super(props)
            this.state = {
                value : '',
                finalValue :''          
            }
        }

        handleChange = (e) => {
            this.setState({value: parseInt(e.target.value)})     
        }

        onSubmit = (e) => {
            e.preventDefault()
            this.setState ({ finalValue: this.state.value})
            this.setState({value: ''})        
        }
        render() { 
                // const strval = this.state.finalValue
                // const intval = parseInt(strval)                      
            return (
              <div className = 'input'>    
                <form className="form-inline">
                        <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="inputPassword2" className="sr-only">Enter integer</label>
                        <input type="number" className="form-control" value = {this.state.value} onChange = {this.handleChange}  placeholder="Enter integer" />
                        </div>
                        <button type="submit" onClick = {this.onSubmit} className="btn btn-primary mb-2">Submit</button>
                </form>
               
                    {/* <h3>{work(intval)}</h3> */}
                    <h2 className='inp'>
                    { (this.state.finalValue % 15 === 0) ? "SKIM is a nice place to work" :
                        (this.state.finalValue % 3 === 0)  ? "SKIM": 
                        (this.state.finalValue % 5 === 0)  ? "is a nice place to work": 
                        this.state.finalValue }
                    </h2>
              </div>
            )
          }
    }

  
export default  input

