import React,{useState} from 'react'

const SongForm = ({addSong})=>{
    const [title,setTitle]= useState('');
    var handleSubmit = (e)=>{
        e.preventDefault();
        addSong(title);
        setTitle('');


    }
    var handleChange = (e)=>{
        setTitle(e.target.value);
    }
    return (
        <div>
          <form onSubmit ={handleSubmit}>
              <input type='text' value={title} onChange={handleChange}/>
              <input type='submit' value="submit"/>
          </form>  
        </div>
    )
}

export default SongForm