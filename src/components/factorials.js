
import React, { Component } from 'react'
import work from './algorithms/work'

class factorial extends Component {
    constructor(props){
        super(props)
            this.state = {
                value : '',
                finalValue :''
            }
        }

        handleChange = (e) => {
            this.setState({value: e.target.value})
            // console.log('whattts', this.state.value)
        }
    

        onSubmit = (e) => {
            e.preventDefault()
            this.setState ({finalValue: this.state.value})
            console.log('heheh', this.state.finalValue)
            this.setState({value: ''})
            
           
            
        }

       

        render() { 
        
            return (
              <div className = 'input'> 
                    <form >
                        <input type="text" value = {this.state.value} onChange = {this.handleChange}  placeholder = 'enter integer'/> 
                        <button onClick = {this.onSubmit} type="button" className="btn btn-primary">Enter Integer</button>  
                    </form>  

                    <h2 >
                 here is where i am
                        </h2>

              </div>
            )
          }
    }

  


export default factorial

