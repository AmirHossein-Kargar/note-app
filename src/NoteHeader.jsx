function NoteHeader() {
  return (
    <div className="flex items-center justify-evenly border-b border-text-color pb-5">
      <h1 className="text-2xl font-bold tracking-wide">My Notes (3)</h1>
      <select className="rounded-md shadow-sm py-1 px-8 focus:outline-none focus:ring-2 focus:ring-blue-500 text-main-color cursor-pointer bg-text-color">
        <option disabled selected>Select an option</option>
        <option value="latest">latest notes</option>
        <option value="earliest">earliest notes</option>
        <option value="completed">completed notes</option>
      </select>
    </div>
  );
}

export default NoteHeader