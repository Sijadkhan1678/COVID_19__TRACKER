import {GET_COUNTRIES,GET_DATA,SET_COUNTRY,GET_COUNTRY_DATA} from './Types';

const AppReducer = (state,action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state, coutries: action.payload
      }
    case GET_DATA:
      return {
        ...state, data: action.payload
      }
      case SET_COUNTRY:
        return {
          ...state, country: action.payload
        }
      case GET_COUNTRY_DATA:
        return {
          ...state, data: action.payload
        }
      
    default:
     return  state
  }
  
}

export default AppReducer;
