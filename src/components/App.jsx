import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function App() {
  let makeEntries = emojipedia.map((item) => {
    return (
      <Entry
        id={item.id}
        emoji={item.emoji}
        name={item.name}
        meaning={item.meaning}
      />
    );
  });

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{makeEntries}</dl>
    </div>
  );
}

export default App;
