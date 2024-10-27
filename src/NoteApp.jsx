function NoteApp() {
  return (
    <div className="note-app flex justify-between gap-8">
      <div className="add-new-note w-4/12 text-center">
        <h2 className="mb-10 text-2xl font-bold tracking-wide">Add New Note</h2>
        <form action="" className="gap-6 grid">
          <input
            type="text"
            placeholder="Note Title"
            className="text-center rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-main-color bg-text-color w-full"
          />
          <input
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
      <div className="w-2/3 text-center">
        <div>
          <h2 className="text-lg tracking-wide">
            No notes have been added. <span>🤔</span>
          </h2>
        </div>
        <div className="note-list"></div>
      </div>
    </div>
  );
}

export default NoteApp;
