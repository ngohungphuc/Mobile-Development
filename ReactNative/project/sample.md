```js
const reducer = (state = [], action) => {
	if(action.type === 'split_string') {
  	return action.payload.split('');
  }
  return state;
};

const store = Redux.createStore(reducer);

store.getState();

const action = {type: 'split_string', payload: 'asdf'};

store.dispatch(action);

store.getState();
```
