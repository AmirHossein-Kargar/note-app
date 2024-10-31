// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import NoteHeader from "./NoteHeader";
import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";
function App() {
  // eslint-disable-next-line no-undef, no-unused-vars
  const [notes, setNotes] = useState([]);

  const handleAddNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className="container mx-auto max-w-screen-xl my-8 p-4">
      <NoteHeader />
      <div className="note-app flex flex-col gap-32 justify-center items-center sm:flex-row">
        <AddNewNote onAddNote={handleAddNotes} />
        <NoteList notes={notes} />
      </div>
    </div>
  );
}

export default App;
