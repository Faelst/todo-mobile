import { ReactNode, createContext, useState } from 'react';
import { ITaskProps } from '../components/Task';

export type TaskContextDaraProps = {
  tasks: ITaskProps[];
  setTasks: (data: ITaskProps[]) => void;
  taskDescription: string;
  setTaskDescription: (taskDescription: string) => void;
};

export const TaskContext = createContext<TaskContextDaraProps>(
  {} as TaskContextDaraProps
);

type TaskContextProviderProps = {
  children: ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [tasks, setTasks] = useState<ITaskProps[]>([]);
  const [taskDescription, setTaskDescription] = useState<string>();

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        taskDescription,
        setTaskDescription,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
