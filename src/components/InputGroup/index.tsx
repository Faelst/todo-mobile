import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import { styles } from './styles';
import { Input } from '../Input';

interface InputGroupProps {
  handleChange: (value?: any) => void;
  handleSubmit: (value?: any) => void;
  value: any;
}

export function InputGroup({
  handleChange,
  handleSubmit,
  value,
}: InputGroupProps) {
  return (
    <View style={styles.inputContent}>
      <Input handleChange={handleChange} value={value} />

      <View style={styles.verticalLine} />

      <TouchableOpacity
        style={styles.btnSubmitTask}
        onPress={() => handleSubmit()}
      >
        <Icon name="arrow-right" size={20} color="#EBEBEB" />
      </TouchableOpacity>
    </View>
  );
}
