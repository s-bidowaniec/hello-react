import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains';
// reducers
import listsReducer from './listsRedux';
import columnsReducer from './columsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';
// selectors
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
export const searchCard = (payload) => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const addToFavorite = (payload) => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
