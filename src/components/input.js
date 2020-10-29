import React, { Component } from 'react';
import work from './algorithms/work';

class input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      finalValue: '',
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ finalValue: this.state.value });
    this.setState({ value: '' });
  };

  onReset = (e) => {
    e.preventDefault();
    this.setState({ finalValue: '' });
  };

  render() {
    const strval = this.state.finalValue;
    const intval = parseInt(strval);

    return (
      <div className='input'>
        <form className='form-inline'>
          <div className='form-group mx-sm-3 mb-2'>
            <label className='sr-only'>Enter integer</label>
            <input
              type='number'
              className='form-control'
              value={this.state.value}
              onChange={this.handleChange}
              placeholder='Enter integer'
            />
          </div>
          <button
            type='submit'
            onClick={this.onSubmit}
            className='btn btn-success mb-2'
          >
            Submit
          </button>
        </form>

        <h2 className='wrk'> {work(intval)}</h2>

        <button
          type='submit'
          onClick={this.onReset}
          className='btn btn-primary mb-2'
        >
          Reset
        </button>
      </div>
    );
  }
}

export default input;
