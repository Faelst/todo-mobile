import { FlatList, View } from 'react-native';
import { Header } from '../../components/Header';
import { InputGroup } from '../../components/InputGroup';
import { styles } from './styles';
import { ITaskProps, Task } from '../../components/Task';
import { useState } from 'react';
import { useTask } from '../../hooks/useTask';

export function Home() {
  const { tasks, setTasks } = useTask();
  const [description, setDescription] = useState<string>();

  const handleAddNewTask = () => {
    setTasks([...tasks, { description, finished: false }]);
    setDescription('');
  };

  const handleDeleteTask = (taskSelect: ITaskProps) => {
    const newListOfTask = tasks.filter((task) => task != taskSelect);
    setTasks(newListOfTask);
  };

  const handleFinishTask = (taskSelect: ITaskProps) => {
    const newListOfTask = tasks.map((task) =>
      task === taskSelect
        ? {
            description: taskSelect.description,
            finished: !taskSelect.finished,
          }
        : task
    );
    setTasks(newListOfTask);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <InputGroup
          handleChange={setDescription}
          handleSubmit={handleAddNewTask}
          value={description}
        />

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.description}
          renderItem={({ item }: { item: ITaskProps }) => (
            <Task
              {...item}
              handleDeleteTask={() => handleDeleteTask(item)}
              handleFinishTask={() => handleFinishTask(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
