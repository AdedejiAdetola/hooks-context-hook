import { useState } from "react";

const AddNewSong = ({ addSongs }) => {
    const [title, setTitle] = useState('set');
    const handleSubmit = (e) => {
        e.preventDefault();
        addSongs(title);
        setTitle('');

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Song Title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type="submit" value="Add Song"/>
            </form>
        </div>
    );
}
 
export default AddNewSong;