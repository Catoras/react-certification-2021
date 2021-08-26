import { storage } from '../utils/storage';

const initialStore = {
  isDark: storage.get('IS_DARK') !== null ? storage.get('IS_DARK') : true,
  favorites: storage.get('FAVORITES') !== null ? storage.get('FAVORITES') : [],
};

const types = {
  TOGGLE_THEME_MODE: 'TOGGLE_THEME_MODE',
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
  DELETE_FROM_FAVORITES: 'DELETE_FROM_FAVORITES',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.TOGGLE_THEME_MODE:
      storage.set('IS_DARK', !state.isDark);
      return {
        ...state,
        isDark: !state.isDark,
      };
    case types.ADD_TO_FAVORITES: {
      const newArray = state.favorites.concat(Array(action.payload));
      storage.set('FAVORITES', newArray);
      return {
        ...state,
        favorites: newArray,
      };
    }
    case types.DELETE_FROM_FAVORITES: {
      const newArray = state.favorites.filter((videoId) => videoId !== action.payload);
      storage.set('FAVORITES', newArray);
      return {
        ...state,
        favorites: newArray,
      };
    }
    default:
      return state;
  }
};

export { initialStore, types };
export default storeReducer;
