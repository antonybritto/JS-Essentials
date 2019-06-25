function createStore(reducer) {
   const state;
   const listeners = [];
   const getState = () => state;
   const dispatch = (action) => {
     state = reducer(state, action);
     listeners.forEach(listener => listener());
   };
   const subscribe = (listener) => {
     let isSubscribed = true;
     listeners.push(listener);
     return function unsubscribe() {
        if (!isSubscribed) {
            return;
        }
        isSubscribed = false;
        var index = listeners.indexOf(listener)
        listeners.splice(index, 1);
     }
   };
   dispatch({});
   return { getState, dispatch, subscribe };
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.data]);
    default:
      return state;
  }
}

const store = createStore(todos);

store.dispatch({
  type: 'ADD_TODO',
  data: 'Read the docs'
})

store.subscribe(() => store.getState());
