import { TextInput } from 'react-native';
import { styles } from './styles';

interface InputProps {
  handleChange: (value: string) => void;
  value: string;
}

export function Input({ handleChange, value }: InputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Adicione uma tarefa"
      placeholderTextColor="#B2B2B2"
      onChangeText={handleChange}
      value={value}
    />
  );
}
