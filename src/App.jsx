// eslint-disable-next-line no-unused-vars
import React, { useReducer, useState } from "react";
import Swal from "sweetalert2";

import NoteHeader from "./NoteHeader";
import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";

function notesReducer(state, action) {
switch(action.type) {
  case "add": {
    return [...state, action.payload];
  } case "delete" : {
   return state.filter(s => s.id !== action.payload)
  } case "complete" : {
   return state.map(note => note.id == action.payload ? {...note, completed: !note.completed} : note)
  }
  default : throw new Error("Unknown error" + action.type)
}  
}

export default function App() {  
 const [notes, dispatch] = useReducer(notesReducer, [])

  const handleAddNotes = (newNote) => {
    dispatch({type: "add", payload: newNote})
  };

  const handleDeleteNote = (id) => {
    // Swal.fire({
    //   title: "Are you sure you want to delete this note?",
    //   text: "This action cannot be undone!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#ef4444",
    //   cancelButtonColor: "#3b82f6",
    //   confirmButtonText: "Yes, delete it!",
    //   cancelButtonText: "Cancel",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
    //     Swal.fire("Deleted!", "Your note has been deleted.", "success");
    //   }
    // });
    dispatch({type: 'delete', payload: id})
  };

  const handleCompleteNotes = (e) => {
    const noteId = Number(e.target.value)
    dispatch({type: "complete", payload: noteId})
  };

  return (
    <div className="container max-w-screen-xl p-4 mx-auto my-8">
      <NoteHeader  notes={notes}/>
      <div className="flex flex-col items-center justify-center gap-32 note-app sm:flex-row">
        <AddNewNote onAddNote={handleAddNotes} />
        <NoteList
          notes={notes}
          onDelete={handleDeleteNote}
          onComplete={handleCompleteNotes}
        />
      </div>
    </div>
  );
}