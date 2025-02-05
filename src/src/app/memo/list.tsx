import { StyleSheet, Text, View } from 'react-native'

import CircleButton from '@/components/CircleButton'
import Header from '@/components/Header'
import MemoListItem from '@/components/MemoListItem'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />

      <MemoListItem />
      <MemoListItem />
      <MemoListItem />

      <CircleButton>+</CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'FFFFFF',
  },
})

export default Index
