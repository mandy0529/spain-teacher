import {Todo, TodoState} from '../interfaces/interface';

export const inital_state: TodoState = {
  todoCount: 1,
  compledted: 2,
  todos: [{id: 1, desc: 'one', completed: true}],
  pending: 2,
};

type TodoAction =
  | {type: 'addtodo'; payload: Todo}
  | {type: 'toggletodo'; payload: {id: string; loading: boolean}};

export const reducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case 'addtodo':
      return {...state, todos: [...state.todos, action.payload]};

    default:
      throw new Error('no return state');
  }
};
