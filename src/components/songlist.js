import React ,{useState,useEffect}from 'react'
import SongForm from "./songForm.js";

 const  SongList=()=> {
    const [songs,setsSongs]=useState([
        {id:1,name:'wake me up'},
        {id:2,name:'Fire'},
        {id:3,name:'Gambling man'},
        {id:4,name:'Tanjiro no uta'},

    ]);
    const addSongs = (name)=>{
        setsSongs([...songs,{id:Math.random(),name},
                    ])
    }
    var Songs = songs.map(song=>{
        return <li>{song.name}</li>
    })
    const [age, setAge] = useState(20);
    useEffect(()=>{
        console.log("effect ran...");
    },[songs]);
    return (
        <div>
            <SongForm addSong = {addSongs}/>
            <button onClick={ ()=>setAge(age+1)}>{age}</button>
            <ul>
                {Songs}
            </ul>
            
        </div>
    )
}
export default SongList