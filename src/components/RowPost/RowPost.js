import axios from '../../axios'
import YouTube from 'react-youtube'
import React,{useEffect,useState} from 'react'
import {imgUrl,API_KEY} from '../constants/Constants'
import './RowPost.css'
function RowPost(props) {
  const [movie,setMovie] = useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovie(response.data.results)
    }).catch(err=>{
      //alert("network error")
    })
  
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay:0,

    },
  };
  const handleMovie=(id)=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        setUrlId(urlId="cant play")
      }
    })
    console.log(id);
  }
  return (
    <div className='RowPost'>
       <h2 className='small-poster-title'>{props.title}</h2>
      <div className="posters">

       {
         movie.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPosters':'poster'} src={`${imgUrl+obj.backdrop_path}`} alt="posters" />
          
         )
       }
         
      </div>
     {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost