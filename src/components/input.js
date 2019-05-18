
import React, { Component } from 'react'
import work from './algorithms/work'


class input extends Component {
    constructor(props){
        super(props)
            this.state = {
                value : '',
                finalValue :''
               
            }
        }

        handleChange = (e) => {
            this.setState({value: e.target.value})
            
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

                    <form>
                    
                        <input type="text" value = {this.state.value} onChange = {this.handleChange}  placeholder = 'enter integer'/> 
                        <button onClick = {this.onSubmit} type="button" className="btn btn-primary">Enter Integer</button>  
                     
                    </form>

                    {/* <h3>{(this.state.finalValue)}</h3> */}

                    {/* <h3>{work(intval)}</h3> */}


                    <h2 >
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

