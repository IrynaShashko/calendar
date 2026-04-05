import { Trash2 } from "lucide-react";

import type { TaskType } from "@shared/task.interface.js";

import {
  LabelBar,
  LabelBarContainer,
  TaskCard,
  TaskTitle,
  TaskWrapper,
} from "./CalendarStyles.js";

interface TaskItemProps {
  task: TaskType;
  onEdit: (e: React.MouseEvent, task: TaskType) => void;
  onDelete: (e: React.MouseEvent, id: string) => void;
}

export const TaskItem = ({ task, onEdit, onDelete }: TaskItemProps) => (
  <TaskCard onClick={(e) => onEdit(e, task)}>
    {task.labels && task.labels.length > 0 && (
      <LabelBarContainer>
        <LabelBar color={task.labels[0]} />
      </LabelBarContainer>
    )}
    <TaskWrapper>
      <TaskTitle>{task.title}</TaskTitle>
      <button
        type="button"
        style={{ position: "static", marginLeft: 8 }}
        onClick={(e) => {
          e.stopPropagation();
          onDelete(e, task._id || "");
        }}
      >
        <Trash2 size={16} />
      </button>
    </TaskWrapper>
  </TaskCard>
);
