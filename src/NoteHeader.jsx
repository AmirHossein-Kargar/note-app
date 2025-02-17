/* eslint-disable react/prop-types */
export default function NoteHeader({notes}) {
  return (
    <div className="flex flex-col items-center gap-4 pb-5 mb-12 border-b sm:flex-row sm:gap-0 justify-evenly border-text-color">
      <h1 className="text-2xl font-bold tracking-wide cursor-default select-none whitespace-nowrap">Your Notes ({notes.length})</h1>
      <select className="py-1 shadow-sm cursor-pointer rounded-xl px-14 focus:outline-none focus:ring-2 focus:ring-blue-500 text-main-color bg-text-color">
        <option disabled selected>Select an option</option>
        <option value="latest">latest notes</option>
        <option value="earliest">earliest notes</option>
        <option value="completed">completed notes</option>
      </select>
    </div>
  );
}