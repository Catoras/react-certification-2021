import { storage } from '../utils/storage';

const initialStore = {
  isDark: storage.get('IS_DARK') !== null ? storage.get('IS_DARK') : true,
};

const types = {
  TOGGLE_THEME_MODE: 'TOGGLE_THEME_MODE',
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.TOGGLE_THEME_MODE:
      storage.set('IS_DARK', !state.isDark);
      return {
        ...state,
        isDark: !state.isDark,
      };
    default:
      return state;
  }
};

export { initialStore, types };
export default storeReducer;
