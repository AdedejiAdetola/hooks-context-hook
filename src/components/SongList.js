import { useState, useEffect } from 'react';
import uuid from 'uuid/dist/v1';
import AddNewSong from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'almost home', id: 1},
        {title: 'this wild darkness', id: 2},
        {title: 'memory gospel', id: 3}
    ]);

    const addSong = (title) => {
        setSongs([...songs, {title: title, id: uuid()}]);
    }
    const [add, setAdd] = useState(20);
    useEffect(() => {
      return(console.log('use Effect ran add'))
    }, [add]);
    useEffect(() => {
        return(console.log('use Effect ran song'))
      }, [songs]);
    return ( 
        <div>
            <ul>
                {songs.map(song => {
                    return (
                        <li key= {song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <AddNewSong addSongs={addSong }/> 
            <button onClick={() => setAdd(add+1)}>Add new song: {add}</button>
        </div>
     );
}
 
export default SongList;
