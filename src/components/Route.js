import React,{useEffect,useState} from 'react'

const Route = ({path,children}) => {
  const[currentPath,setCurrentpath] = useState(window.location.pathname)
  const onLocationChange = () => {
    setCurrentpath(window.location.pathname)
  }
  useEffect(() => {
    window.addEventListener('popstate',onLocationChange)

    return ()=>{
      window.removeEventListener('popstate',onLocationChange);
    }
  },[])
  return currentPath=== path?  children :  null;  
}

export default Route;