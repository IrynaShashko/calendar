import type { TaskType } from "@shared/task.interface.js";

import {
  LabelBar,
  LabelBarContainer,
  LabelContainer,
  TaskCard,
  TaskTitle,
} from "./CalendarStyles.js";

interface TaskItemProps {
  task: TaskType;
  onEdit: (e: React.MouseEvent, task: TaskType) => void;
  onDelete: (e: React.MouseEvent, id: string) => void;
}

export const TaskItem = ({ task, onEdit, onDelete }: TaskItemProps) => (
  <TaskCard onClick={(e) => onEdit(e, task)}>
    <LabelContainer>
      {task.labels && task.labels.length > 0 && (
        <LabelBarContainer>
          {task.labels.map((color) => (
            <LabelBar key={color} color={color} />
          ))}
        </LabelBarContainer>
      )}
    </LabelContainer>
    <TaskTitle>{task.title}</TaskTitle>
    <button onClick={(e) => onDelete(e, task._id || "")}>×</button>
  </TaskCard>
);
