import { StyleSheet, Text, View } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <View />
        <View>
          <Text>Memo App</Text>
          <Text>logout</Text>
        </View>
      </View>

      <View>
        <View>
          <Text>買い物リスト_A</Text>
          <Text>2025-01-24 08:04</Text>
          <View>
            <Text>x</Text>
          </View>
        </View>
        <View>
          <Text>買い物リスト_B</Text>
          <Text>2025-01-25 08:04</Text>
          <View>
            <Text>x</Text>
          </View>
        </View>
        <View>
          <Text>買い物リスト_C</Text>
          <Text>2025-01-26 08:04</Text>
          <View>
            <Text>x</Text>
          </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Index
