import { useState } from "react";


// eslint-disable-next-line react/prop-types
function AddNewNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return null;

    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    onAddNote(newNote)
    setTitle("");
    setDescription("");
    // setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className="add-new-note w-4/12 text-center">
      <h2 className="mb-10 text-2xl font-bold tracking-wide">Add New Note</h2>
      <form action="" className="gap-6 grid" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Note Title"
          className="text-center rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-main-color bg-text-color w-full"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Note Description"
          className="text-center rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-main-color bg-text-color w-full"
        />
        <button
          type="submit"
          className="bg-blue-800 hover:bg-transparent hover:border hover:border-text-color transition duration-200 ease-in text-text-color font-semibold p-3 rounded-lg"
        >
          Click to Add
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
