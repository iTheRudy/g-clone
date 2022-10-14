import React ,{createContext, useContext, useState} from 'react'

/*
    * React context allows us to pass down and use (consume) data
      in whatever component we need in our React app without using props.
    * React context helps us avoid the problem of props drilling.
    * Props drilling is a term to describe when you pass props down multiple levels
      to a nested component, through components that don't need it.
*/ 

const ResultContext = createContext();

const baseURL = 'https://seo-api.p.rapidapi.com/v1'

export let getResults = ()=>{

}
const ResultContextProvider = ({children}) => {   
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('youtube react');

    getResults = async (type) => {
        setIsLoading(true);
        const response = await fetch(`${baseURL}${type}`,{
            method:'GET',
            headers: {
              'X-Proxy-Location': 'EU',
              'X-User-Agent': 'desktop',
              'X-RapidAPI-Key': '1daf9476a7mshd275304093fb054p15d2dejsnf98e4dcb5b35',
              'X-RapidAPI-Host': 'seo-api.p.rapidapi.com'
              }
        });
        const data = await response.json();
        setResults(data);
        console.log(data);
        setIsLoading(false);
        if(type.includes('/image')){
            setResults(data.image_results)
        } else if(type.includes('/news')){
            setResults(data.entries)
        }else{
            setResults(data.results)
        }
    }
    
  return (
    <ResultContext.Provider value={{results, setResults, searchTerm, setSearchTerm, isLoading}}>
        {children}
    </ResultContext.Provider>
  )
}
export const useResultContext = () => useContext(ResultContext) ;
export default ResultContextProvider