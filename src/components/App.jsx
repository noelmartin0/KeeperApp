import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [list,setList] = useState([]);

    function addNote(newNote){
        setList(prevNote => [...prevNote, newNote]);
    }

    function deleteNote(id){
        setList(prevNote => {
            return (prevNote.filter((note,index)=> {
                return index !== id; 
            }));
        })
    }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {list.map((note,index)=> <Note title={note.title} content={note.content} onDelete={deleteNote} id={index} key={index}/>)}
      <Footer />
    </div>
  );
}

export default App;
