import React from "react";

function DeleteCategory({ id, setDelCategory }) {
  const handleDelete = () => {
    fetch(`http://localhost:1212/admin/categories/${id}`, {
      method: "DELETE",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNzQzNDU0fQ.sFu4MYKeNEy2Q7SufqeoX4yqN4G-G8GfWVEwUGwDOGo",
      },
    });
    setDelCategory(false);
  };
  const handleDeleteNo = () => {
    setDelCategory(false);
  };
  return (
    <div className="fixed left-[40%] top-[15%] w-[30%] rounded-md border-2  border-red-600 bg-[#f5f0e0] p-6 text-center shadow-2xl shadow-black">
      <h3 className="text-xl font-medium">Haqiqatdan ham o'chirmoqchimisiz?</h3>
      <div className="bttns me-2 mt-4 flex justify-end space-x-3">
        <button
          className="no rounded border bg-red-200 px-6 py-1 font-medium"
          onClick={handleDeleteNo}
        >
          Yo'q
        </button>
        <button
          className="yes rounded border bg-red-200 px-6 py-1 font-medium hover:bg-red-400 hover:text-white "
          onClick={handleDelete}
        >
          Ha
        </button>
      </div>
    </div>
  );
}

export default DeleteCategory;
