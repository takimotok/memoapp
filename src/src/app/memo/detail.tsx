import { Feather } from '@expo/vector-icons'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import CircleButton from '@/components/CircleButton'
import Header from '@/components/Header'

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2025-02-05 11:07</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          買い物リスト 世帯やレイアウトなどを確認するために用います.
          本文用なので使い方を間違えると不自然に見えることもあるので注意.
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: 'auto' }}>
        <Feather name='plus' size={40} />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
  },
})

export default Detail
