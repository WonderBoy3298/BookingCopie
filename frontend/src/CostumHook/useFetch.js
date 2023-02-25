import { useEffect, useState } from "react"
import axios from 'axios';



const useFecth = (url) => {
    const [data,setdata] = useState([])
    const [error,setError]=useState(false)
    const [loading,setLoading]=useState(false)

    useEffect(() => {
        const fetchData = async () => {


          setLoading(true);
          
          try {
            const res = await axios.get(url);
            setdata(res.data);
          } catch (err) {

            setError(err);
          
          }
          setLoading(false);
        };
        fetchData();
      }, [url])
      const reFetch = async () => {
        setLoading(true);
        try {
          const res = await axios.get(url);
          setdata(res.data);
        } catch (err) {
          setError(err);
        }
        setLoading(false);
      };
      
    
    
      return {data,error,loading,reFetch}


}

export default useFecth