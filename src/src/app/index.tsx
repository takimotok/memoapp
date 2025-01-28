import { StyleSheet, Text, View } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContaner}>
        <View style={styles.headerItems}>
          <Text style={styles.headerTitle}>Memo App</Text>
          <Text style={styles.headerLogout}>logout</Text>
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListTitle}>買い物リスト_A</Text>
          <Text style={styles.memoListDate}>2025-01-24 08:04</Text>
        </View>
        <View>
          <Text>x</Text>
        </View>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListTitle}>買い物リスト_A</Text>
          <Text style={styles.memoListDate}>2025-01-24 08:04</Text>
        </View>
        <View>
          <Text>x</Text>
        </View>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListTitle}>買い物リスト_A</Text>
          <Text style={styles.memoListDate}>2025-01-24 08:04</Text>
        </View>
        <View>
          <Text>x</Text>
        </View>
      </View>

      <View>
        <Text>+</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'FFFFFF',
  },
  headerContaner: {
    backgroundColor: '#467FD3',
    height: 104,
    justifyContent: 'flex-end',
  },
  headerItems: {
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    marginBottom: 8,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  headerLogout: {
    color: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute',
    right: 16,
  },
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

export default Index
