import { useState } from "react";
import { AddThoughtForm } from "./AddThoughtForm";
import { Thought } from "./Thought";
import { generateId, getNewExpirationTime } from "./utilities";

export default function App() {
  // the list of thoughts, starting with two examples
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  // newest thought goes on top
  const addThought = (thought) => {
    setThoughts((prev) => [thought, ...prev]);
  };

  // keep everything except the one that matches the id
  // callback form so the timers always get the latest list
  const removeThought = (thoughtIdToRemove) => {
    setThoughts((thoughts) =>
      thoughts.filter((thought) => thought.id !== thoughtIdToRemove),
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought
              key={thought.id}
              thought={thought}
              removeThought={removeThought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
