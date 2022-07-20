import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter((card) => card.columnId === columnId && strContains(card.title, searchString));
export const getFavoriteCards = ({ cards }) => cards.filter((card) => card.isFavorite);
export const getAllColumns = ({ columns }) => columns;
export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);
export const getAllLists = ({ lists }) => lists;
export const getListById = ({ lists }, listId) => lists.find((list) => list.id === listId);
export const getSearchString = ({ searchString }) => searchString;

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const addList = (payload) => ({ type: 'ADD_LIST', payload });
export const searchCard = (payload) => ({ type: 'SEARCH_CARD', payload });
export const addToFavorite = (payload) => ({ type: 'ADD_TO_FAVORITE', payload });

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
    case 'ADD_LIST':
      action.payload.id = shortid();
      return { ...state, lists: [...state.lists, action.payload] };
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.id ? { ...card, isFavorite: !card.isFavorite } : card
        )
      };
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
