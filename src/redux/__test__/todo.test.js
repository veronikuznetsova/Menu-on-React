import reducer from '../reducers/todoReducer';
import { addTodo, removeTodo } from '../actions/todo';

it('should return initial value', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual({
        items: ['one', 'two', 'three'],
        loading: false
    });
});

it('should add new item', () => {
    const state = {
        items: ['one'],
        loading: false
    }

    const newState = reducer(state, addTodo('custom'));
    expect(newState).toEqual({
        items: ['one', 'custom'],
        loading: false
    });
});

it('should remove item', () => {
    const state = {
        items: ['one', 'two'],
        loading: false
    }

    const newState = reducer(state, removeTodo('two'));
    expect(newState).toEqual({
        items: ['one'],
        loading: false
    });
});