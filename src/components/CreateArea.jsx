import React, {useState} from "react";

function CreateArea(props) {
  const [list,setList] = useState({
    title: "",
    content: ""
  });
  
  function update(event){
    const {name,value} =event.target;
    setList((prevValue) => {
        return {
            ...prevValue,
            [name]: value
        }
    });
  }

  function submitted(event){
    event.preventDefault();
    props.onAdd(list);
    setList({
        title: "",
        content: ""
      }); 
  }

  return (
    <div>
      <form>
        <input onChange={update} name="title" placeholder="Title" value={list.title}/>
        <textarea onChange={update} name="content" placeholder="Take a note..." rows="3" value={list.content} />
        <button onClick={submitted}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;