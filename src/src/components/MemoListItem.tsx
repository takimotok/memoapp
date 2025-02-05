import { StyleSheet, Text, View } from 'react-native'

const MemoListItem = (): JSX.Element => {
  return (
    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListTitle}>買い物リスト_A</Text>
        <Text style={styles.memoListDate}>2025-01-24 08:04</Text>
      </View>
      <View>
        <Text>x</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListDate: {
    color: '#848484',
    fontSize: 12,
    lineHeight: 32,
  },
})

export default MemoListItem
