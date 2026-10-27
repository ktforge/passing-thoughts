import { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export function AddThoughtForm(props) {
  // whatever is typed in the box right now
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    // stop the form from reloading the page
    event.preventDefault();

    // skip empty thoughts
    if (text.length > 0) {
      const thought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime(),
      };
      props.addThought(thought);
      // clear the box for the next one
      setText("");
    }
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
