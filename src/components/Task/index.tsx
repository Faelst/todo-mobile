import Checkbox from 'expo-checkbox';
import Icon from '@expo/vector-icons/FontAwesome';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export interface ITaskProps {
  description: string;
  finished: boolean;
  handleDeleteTask?: () => void;
  handleFinishTask?: () => void;
}

export function Task({
  description,
  finished,
  handleDeleteTask,
  handleFinishTask,
}: ITaskProps) {
  const style = styles({ description, finished });

  return (
    <View style={style.taskContent}>
      <Checkbox
        value={finished}
        style={style.checkTask}
        color={finished ? '#1DB863' : undefined}
        onValueChange={handleFinishTask}
      />
      <Text style={style.taskDescription}>{description}</Text>
      <TouchableOpacity style={style.btnRemoveTask} onPress={handleDeleteTask}>
        <Icon name="trash-o" size={20} color="#B2B2B2" />
      </TouchableOpacity>
    </View>
  );
}
