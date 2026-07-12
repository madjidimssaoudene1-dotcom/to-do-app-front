export default function EditModal({
  dialogRef,
  editText,
  setEditText,
  saveEdit,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && editText.text.trim()) {
      e.preventDefault();
      saveEdit();
    }
  };
  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Edit Todo</h3>
        <textarea
          value={editText.text}
          onChange={(e) => setEditText((p) => ({ ...p, text: e.target.value }))}
          onKeyDown={handleKeyDown}
          className="textarea textarea-bordered resize-none h-24 w-full "
          placeholder="Enter your todo..."
          autoFocus
        />

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-ghost hover:scale-105 transition-transform">
              Cancel
            </button>
            <button onClick={saveEdit} className="btn btn-primary">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
