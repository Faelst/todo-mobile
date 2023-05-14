import { StyleSheet } from 'react-native';
import { ITaskProps } from '.';

export const styles = (props: ITaskProps) =>
  StyleSheet.create({
    taskContent: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#e0e0e0',
      padding: 15,
      gap: 20,
    },
    taskDescription: {
      flex: 1,
      color: props.finished ? '#1DB863' : '#666666',
      textDecorationLine: props.finished ? 'line-through' : 'none',
    },
    btnRemoveTask: {
      paddingHorizontal: 10,
    },
    checkTask: {
      borderColor: '#B2B2B2',
      borderRadius: 4,
    },
  });
