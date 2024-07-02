import { useRef, useState } from "react";
import { GoalType } from "../../App";

type AddGoalType = {
  onAddGoal: (goal: GoalType) => void;
};

export default function NewGoal({ onAddGoal }: AddGoalType) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const titleRef = useRef<HTMLInputElement>(null);

  function handleNewGoalSubmit(e: any) {
    e.preventDefault();
    const newGoal: GoalType = {
      id: Math.random(),
      title,
      description,
    };
    onAddGoal(newGoal);
    setTitle("");
    setDescription("");
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }

  return (
    <form onSubmit={handleNewGoalSubmit}>
      <p>
        <label htmlFor="goal">Goal</label>
        <input
          type="text"
          id="goal"
          placeholder="Enter goal here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={titleRef}
        />
      </p>
      <p>
        <label htmlFor="summary">Summary</label>
        <input
          type="text"
          id="summary"
          placeholder="Enter goal summary here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
