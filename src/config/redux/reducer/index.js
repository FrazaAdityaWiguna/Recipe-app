const initialState = {
  popup: false,
  isLogin: false,
  isLoading: false,
  user: {},
  posts: [],
  searchMeal: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_POPOUP':
      return {
        ...state,
        popup: action.value,
      };
    case 'CHANGE_ISLOGIN':
      return {
        ...state,
        isLogin: action.value,
      };
    case 'CHANGE_ISLOADING':
      return {
        ...state,
        isLoading: action.value,
      };
    case 'CHANGE_USER':
      return {
        ...state,
        user: action.value,
      };
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.value,
      };
    case 'SET_DATA_SEARCH_MEAL':
      return {
        ...state,
        searchMeal: action.value,
      };
    default:
      return state;
  }
};

export default Reducer;
