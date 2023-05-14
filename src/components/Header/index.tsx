import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import Logo from '../../../assets/to-do.png';
import { useTask } from '../../hooks/useTask';

export function Header() {
  const { tasks } = useTask();

  return (
    <View style={styles.header}>
      <Image source={Logo} alt="" />
      <Text style={styles.subTitle}>
        Você tem{' '}
        <Text style={styles.subTitleSpan}>
          {tasks.filter((task) => !task.finished).length} tarefas
        </Text>
      </Text>
    </View>
  );
}
