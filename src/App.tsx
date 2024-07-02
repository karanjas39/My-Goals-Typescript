import { useMemo, useState } from "react";

import Header from "./components/Header/Header";
import goalImg from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList/CourseGoalList";
import NewGoal from "./components/NewGoal/NewGoal";

export type GoalType = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<GoalType[]>(() => {
    const storedGoals = localStorage.getItem("goals");
    return storedGoals ? JSON.parse(storedGoals) : [];
  });

  const image = useMemo(() => {
    return {
      src: goalImg,
      alt: "A list of goals",
    };
  }, []);

  function handleAddGoal(newGoal: GoalType) {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
    localStorage.setItem("goals", JSON.stringify([...goals, newGoal]));
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={image}>
        <h1>My Goals</h1>
      </Header>

      <NewGoal onAddGoal={handleAddGoal} />

      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
