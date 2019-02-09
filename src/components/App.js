import React, { Component } from 'react';
import './app.css';
import { connect } from 'react-redux';

const actionInc = { type: 'INCREMENT'};
 const actionDec = { type: 'DECREMENT'};


class App extends Component {
  render() {
    const { reduxStore, increment, decrement } = this.props;

    return <div className="app">
      <div>App</div>  
      <div>{reduxStore}</div>       
    <div className="btnn">
      <div onClick={()=>increment(3)}>+3</div>  
      <div onClick={()=>increment(5)}>+5</div>  
      <div onClick={()=>increment(7)}>+7</div>  
      </div>
      <div> ----- </div>
      <div onClick={decrement}>-</div>  
      </div>
  }
}

const mapStateToProps = (state) => {
  return {
    reduxStore: state,
  }
};

const mapDispatchToProps = (dispatch) => ({
  increment: (num) => {
    console.log(num)
    dispatch({...actionInc, num})
  },
  decrement: () => {
    dispatch(actionDec)
  },
}) ;

export default connect(
      mapStateToProps, 
      mapDispatchToProps
    )(App);