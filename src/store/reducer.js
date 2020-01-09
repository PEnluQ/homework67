const initialState = {
    numbers: '',
};

const truth = '1438';

const reducer = (state =initialState, action)=> {
    if(action.type === 'INC_NUMBER'){
        return {
            ...state,
            numbers: state.numbers + action.value
        };
    }
    if(action.type === 'INC_CHECK'){
        if(state.numbers === truth){
            alert('Access Granted');
        } else {
            alert('Failed');
        }
    }
    if(action.type === 'INC_REMOVE'){
        return {
            numbers: ''
        }
    }
    return state;
};

export default reducer;