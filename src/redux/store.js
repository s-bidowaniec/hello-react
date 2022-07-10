import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter((card) => card.columnId === columnId && strContains(card.title, searchString));
export const getAllColumns = ({ columns }) => columns;

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const searchCard = (payload) => ({ type: 'SEARCH_CARD', payload });

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      action.payload.id = shortid();
      return { ...state, columns: [...state.columns, action.payload] };
    case 'ADD_CARD':
      action.payload.id = shortid();
      return { ...state, cards: [...state.cards, action.payload] };
    case 'SEARCH_CARD':
      return { ...state, searchString: action.payload };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
