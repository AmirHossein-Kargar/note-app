function NoteHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-0 items-center justify-evenly border-b border-text-color pb-5 mb-12">
      <h1 className="text-2xl font-bold tracking-wide cursor-default select-none whitespace-nowrap">Your Notes (3)</h1>
      <select className=" rounded-xl shadow-sm py-1 px-14 focus:outline-none focus:ring-2 focus:ring-blue-500 text-main-color cursor-pointer bg-text-color">
        <option disabled selected>Select an option</option>
        <option value="latest">latest notes</option>
        <option value="earliest">earliest notes</option>
        <option value="completed">completed notes</option>
      </select>
    </div>
  );
}

export default NoteHeader