import { type ReactNode } from "react";

interface CourseGoalProp {
  title: string;
  id: number;
  onDeleteGoal: (id: number) => void;
  children: ReactNode;
}

export default function CourseGoal({
  title,
  children,
  id,
  onDeleteGoal,
}: CourseGoalProp) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDeleteGoal(id)}>Delete</button>
    </article>
  );
}
