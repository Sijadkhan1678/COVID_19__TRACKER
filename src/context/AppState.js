import {useReducer} from 'react';
import axios from 'axios'
import {GET_COUNTRIES,GET_DATA,SET_COUNTRY,GET_COUNTRY_DATA} from './Types'
import appContext from './AppContext'
import AppReducer from './AppReducer'

const AppState = ({children}) => {
  
  const initialState = {
    countries:[],
    data: [],
    country: 'Global',
    
  }
  const [state,dispatch] = useReducer(initialState,AppReducer)
  
    // Get countries function
    const getCountries = async () => {
       try {
         const res = await axios.get('https://covid19.mathdro.id/api/countries')
         console.log(res)
         dispatch({
          type:  GET_COUNTRIES,
          payload : res.data
         })
       } 
       catch (error) {
         console.log(error)
       }
    }
    //  function to get global data
    const getData = async () => {
      try {
      const url = 'https://covid19.mathdro.id/api'
     let res = axios.get(url)
    const {confirmed,recovered,deaths,lastUpdate} = res.data
     
     const global= {
       confirmed:confirmed.value,
       recovered: recovered.value,
       deaths:  deaths.value,
       date: new Date(lastUpdate).toDateString()
     }
       res = await axios.get(`${url}/daily`)
     const dailyData = res.data.map(data=>{
      return {
         confirmed: data.totalConfirmed,
         recovered: data.recovered.total,
         deaths: data.deaths.total,
         date : data.reportDate
       }
       })
     const data= {
       global,
       dailyData
       
     }
     console.log(res)
     dispatch({
       type : GET_DATA,
       payload : data
     })
      }
      catch (error) {
        console.log(error)
      }
    }
    
    // Get country Data
    const countryData = async (country) => {
      try {
        const res = await axios.get(`https://api.covid19api.com/total/dayone/country/${country}`);
        console.log(res)
     const   data = res.data.map(data =>({
          confirmed: data.Confirmed,
          recovered: data.Recovered,
          deaths: data.Deaths,
          date : data.Date
        }))
        dispatch({
          type: GET_COUNTRY_DATA,
          payload : data
        })
      }
      catch (error) {
        console.log(error)
      }
    }
    
    // set country function to get country data
    
    const setCountry = (country) => {
      dispatch({
        type: SET_COUNTRY,
        payload: country
      })
    }
    
  <appContext.Provider value={{
        countries: state.countries,
        data: state.data,
        country: state.country,
        countryData,
        getCountries,
        getData,
        setCountry
        
  }}>
   children
  </appContext.Provider>
  
}
export default AppState