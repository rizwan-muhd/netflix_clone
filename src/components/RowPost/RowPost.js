import axios from '../../axios'
import React,{useEffect,useState} from 'react'
import {imgUrl} from '../constants/Constants'
import './RowPost.css'
function RowPost(props) {
  const [movie,setMovie] = useState([])
   
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovie(response.data.results)
    }).catch(err=>{
      //alert("network error")
    })
  
  },[])
  
  return (
    <div className='RowPost'>
       <h2 className='small-poster-title'>{props.title}</h2>
      <div className="posters">

       {
         movie.map((obj)=>
          <img className={props.isSmall?'smallPosters':'poster'} src={`${imgUrl+obj.backdrop_path}`} alt="posters" />
          
         )
       }
         
      </div>
    </div>
  )
}

export default RowPost