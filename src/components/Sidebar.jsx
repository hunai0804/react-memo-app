import React from "react";
import "./Sidebar.css";

const Sidebar = ({ onAddNote, notes, onDeleteNote, activeNote, setActiveNote }) => {

  const sortedNotes = notes.sort((a,b) => b.modDate - a.modDate);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} key={note.id} onClick={() => setActiveNote(note.id)}>
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>削除</button>
            </div>
            <p>{note.content}</p>
            <small>最後の修正日:{new Date(note.modDate).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

html
<div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button>追加</button>
      </div>
      <div className="app-sidebar-notes">
          <div className="app-sidebar-note" key={note.id} onClick={() => setActiveNote(note.id)}>
            <div className="sidebar-note-title">
              <strong>タイトル</strong>
              <button>削除</button>
            </div>
            <p>内容</p>
            <small>最後の修正日:xx:xx</small>
          </div>
      </div>
    </div>

export default Sidebar;
