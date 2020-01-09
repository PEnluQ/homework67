import React, {Component} from 'react';
import {connect} from 'react-redux';

class Castle extends Component {
    numberPack = ['0','1','2','3','4','5','6','7','8','9'];
    render() {
        return (
            <div className='Castle'>
                <input type='text' value={this.props.password}/>
                {this.numberPack.map(item => (
                    <button
                        key={item}
                        onClick={() => this.props.incNumber(item)}
                    >{item}
                    </button>
                ))}
                <button onClick={this.props.incCheck}>E</button>
                <button onClick={this.props.incRemove}>X</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
      password: state.numbers,
  }
};

const mapDispatchToProps = dispatch => {
  return {
      incNumber: (item) => dispatch({type: 'INC_NUMBER', value: item}),
      incCheck: () => dispatch({type:'INC_CHECK'}),
      incRemove: () => dispatch({type:'INC_REMOVE'})
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Castle);