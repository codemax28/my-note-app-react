import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./NotesList";
import Search from "./Search";
import Header from "./Header";

const Main = () => {
    const [notes, setNotes] = useState([
        // {
        //   id: nanoid(),
        //   text: "First note",
        //   date: "12/02/2021",
        // },
        // {
        //   id: nanoid(),
        //   text: "Second note",
        //   date: "14/02/2021",
        // },
        // {
        //   id: nanoid(),
        //   text: "Third note",
        //   date: "15/02/2021",
        // },
      ]);
    
      const [searchText, setSearchText] = useState("");
    
      const [darkMode, setDarkMode] = useState(false);
    
      useEffect(() => {
        const savedNote = JSON.parse(localStorage.getItem("react-notes-app-data"));
        if (savedNote) {
          setNotes(savedNote);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
      }, [notes]);
    
      const addNote = (text) => {
        const date = new Date();
        const newNote = {
          id: nanoid(),
          text: text,
          date: date.toLocaleDateString(),
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
      };
    
      const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
      };
    
      return (
        <div className={`${darkMode && "dark-mode"}`}>
          <div className="container">
            <Header handleToggleDarkMode={setDarkMode} />
            <Search handleSearchNote={setSearchText} />
            <NotesList
              notes={notes.filter((note) =>
                note.text.toLocaleLowerCase().includes(searchText)
              )}
              handleAddNote={addNote}
              handleDeleteNote={deleteNote}
            />
          </div>
        </div>
      );
};

export default Main;