/* eslint-disable react/prop-types */
function NoteList({ notes }) {
  return (
    <div className="w-2/3 text-center">
      <div>
        <h2 className="text-lg tracking-wide">
          {/* No notes have been added. <span>🤔</span> */}
        </h2>
      </div>
      <div className="note-list">
        {
          notes.map((note) => {
            return <NoteIem key={note.id} note={note}/>
          })
        }
       
      </div>
    </div>
  );
}
export default NoteList;

function NoteIem({ note }) {
const options = {
  year: "numeric",
  month: "long",
  day: "numeric"
}

return (
  <div className="note-item p-6 bg-text-color rounded-2xl mb-6">
    <div className="note-item__header flex items-center justify-between pb-4 mb-8 border-b border-black">
      <div className="tracking-wide">
        <h2 className="title text-text-700 text-2xl mb-2 font-bold text-left">{note.title}</h2>
        <h4 className="desc text-xl font-normal text-text-400 text-left">{note.description}</h4>
      </div>
      <div className="actions flex gap-4 items-center">
        <button>❌</button>
        <input
          type="checkbox"
          className="transform scale-150 h-10"
          name=""
          id=""
        />
      </div>
    </div>
    <div className="note-item__footer w-3/6">
      <span className="text-text-400 text-left block cursor-default select-none whitespace-nowrap">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </span>
    </div>
  </div>
);
}
