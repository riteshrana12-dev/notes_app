import React, { useState } from "react";

const NotesAppUI = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const addNote = () => {
    if (title.trim() && details.trim()) {
      const newNote = {
        id: Date.now(),
        title: title.trim(),
        details: details.trim(),
        date: new Date().toLocaleDateString(),
      };
      setNotes([newNote, ...notes]);
      setTitle("");
      setDetails("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (note) => {
    console.log(note);
    setTitle(note.title);
    setDetails(note.details);
    setNotes(notes.filter((n) => n.id !== note.id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200/50 px-6 py-5 sticky top-0 z-50 shadow-sm">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-center">
          Notes App
        </h1>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 h-[90vh] lg:h-screen">
          {/* LEFT SIDE */}
          <section className="lg:order-1 flex flex-col">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 lg:p-8 h-full flex flex-col">
              <div className="mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-2xl lg:text-3xl font-bold text-white">
                      ✏️
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                      Create New Note
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      Fill in title and details
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  📌 Note Title
                </label>
                <input
                  type="text"
                  placeholder="Enter a descriptive title for your note..."
                  className="w-full p-5 lg:p-6 text-lg lg:text-xl font-semibold border-2 border-gray-200 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm shadow-xl hover:shadow-2xl h-16"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="flex-1 mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  📝 Note Details
                </label>
                <textarea
                  placeholder="Write your detailed notes here..."
                  className="w-full p-5 lg:p-6 text-base lg:text-lg border-2 border-gray-200 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm shadow-xl hover:shadow-2xl resize-none flex-1 min-h-[200px]"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows="10"
                />
              </div>

              <button
                onClick={addNote}
                disabled={!title.trim() || !details.trim()}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-5 px-8 rounded-3xl text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center text-2xl font-bold">
                    ➕
                  </span>
                  <span>Add Note</span>
                </div>
              </button>
            </div>
          </section>

          {/* RIGHT SIDE */}
          <section className="lg:order-2 flex flex-col">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 lg:p-8 h-full flex flex-col">
              <div className="mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-2xl lg:text-3xl font-bold text-white">
                        📋
                      </span>
                    </div>
                    <div>
                      <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                        Your Notes
                      </h2>
                      <p className="text-sm text-gray-600">
                        All saved notes appear here
                      </p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-2xl text-sm font-semibold">
                    {notes.length} Notes
                  </span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {notes.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center py-20 h-full">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center mb-8 shadow-xl">
                      <span className="text-4xl font-bold text-gray-500">
                        📄
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-700 mb-4">
                      No notes yet
                    </h3>
                    <p className="text-gray-600 max-w-md leading-relaxed">
                      Your notes will appear here once you create your first
                      note
                    </p>
                  </div>
                ) : (
                  notes.map((note) => (
                    <div
                      key={note.id}
                      className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1 pr-4">
                          <h4 className="text-lg font-bold text-gray-900 mb-2 truncate">
                            {note.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                            <span>📅 {note.date}</span>
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            <span>Active</span>
                          </div>
                        </div>
                        <button
                          onClick={() => deleteNote(note.id)}
                          className="p-3 hover:bg-red-50 hover:text-red-600 rounded-2xl transition-all duration-200 opacity-0 group-hover:opacity-100 ml-3 shadow-sm hover:shadow-md"
                        >
                          <span className="text-xl font-bold">×</span>
                        </button>
                      </div>

                      <p className="text-gray-700 leading-relaxed text-base mb-8 line-clamp-5">
                        {note.details}
                      </p>

                      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>ID: {note.id.toString().slice(-5)}</span>
                        </div>
                        <button
                          onClick={() => editNote(note)}
                          className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold px-6 py-2 rounded-2xl hover:shadow-md transition-all duration-200"
                        >
                          Edit Note
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NotesAppUI;
