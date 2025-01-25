/* eslint-disable react/prop-types */
function NoteList({ notes, onDelete, onComplete }) {
  return (
    <div className="w-2/3 min-h-screen text-center">
      <div>
        <h2 className="text-lg tracking-wide">
          {/* No notes have been added. <span>🤔</span> */}
        </h2>
      </div>
      <div className="note-list">
        {notes.map((note) => {
          return (
            <NoteIem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          );
        })}
      </div>
    </div>
  );
}
export default NoteList;

function NoteIem({ note, onDelete, onComplete }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={`note-item p-6 bg-text-color rounded-2xl mb-6`}>
      <div className="flex items-center justify-between pb-4 mb-8 border-b border-black note-item__header">
        <div className={`tracking-wide text-stone-700 ${note.completed ? "line-through opacity-70" : ""}`}>
          <h2 className="mb-2 text-2xl font-bold text-left title text-text-700">
            {note.title}
          </h2>
          <h4 className="text-xl font-normal text-left desc text-text-400">
            {note.description}
          </h4>
        </div>
        <div className="flex items-center gap-4 actions">
          <button onClick={() => onDelete(note.id)}>❌</button>
          <input
            type="checkbox"
            className="h-10 transform scale-150"
            name={note.id}
            id={note.id}
            value={note.id}
            onChange={onComplete}
            checked={note.completed}
          />
        </div>
      </div>
      <div className="w-3/6 note-item__footer">
        <span className="block text-left cursor-default select-none text-text-400 whitespace-nowrap">
          {new Date(note.createdAt).toLocaleDateString("en-US", options)}
        </span>
      </div>
    </div>
  );
}
