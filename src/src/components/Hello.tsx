import { StyleSheet, Text, View } from 'react-native'

interface Props {
  children: string
}

const Hello = (props: Props): JSX.Element => {
  const { children } = props
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
})

export default Hello
