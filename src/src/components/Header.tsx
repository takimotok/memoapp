import { StyleSheet, Text, View } from 'react-native'

const Header = (): JSX.Element => {
  return (
    <View style={styles.headerContaner}>
      <View style={styles.headerItems}>
        <Text style={styles.headerTitle}>Memo App</Text>
        <Text style={styles.headerLogout}>logout</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
})

export default Header
