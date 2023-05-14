import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#8257E5',
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  subTitle: {
    fontSize: 16,
    color: '#FFF',
  },
  subTitleSpan: {
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
});
