import { useEffect } from "react";

export function Thought(props) {
  const { thought, removeThought } = props;

  // the x button removes it right away
  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  // start a countdown for this thought and remove it when time runs out
  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();
    const timeout = setTimeout(() => {
      removeThought(thought.id);
    }, timeRemaining);

    // cancel the timer if the thought is removed early
    return () => {
      clearTimeout(timeout);
    };
  }, [thought]);

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
