// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Swal from "sweetalert2";

import NoteHeader from "./NoteHeader";
import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";
function App() {
  // eslint-disable-next-line no-undef, no-unused-vars
  const [notes, setNotes] = useState([]);

  const handleAddNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this note?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#3b82f6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
        Swal.fire("Deleted!", "Your note has been deleted.", "success");
      }
    });
  };

  const handleCompleteNotes = (e) => {
    const noteId = Number(e.target.value)
    setNotes(prevNotes => prevNotes.map(note => note.id == noteId ? {...note, completed: !note.completed} : note))
  };

  return (
    <div className="container mx-auto max-w-screen-xl my-8 p-4">
      <NoteHeader />
      <div className="note-app flex flex-col gap-32 justify-center items-center sm:flex-row">
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

export default App;
