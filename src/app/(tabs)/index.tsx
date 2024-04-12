import {View, StyleSheet, Text} from 'react-native'
import { theme } from '@/theme'
import Filters from '../../components/Filters'
import { FILTERS } from '../../utils/filters'
import { useState } from 'react'

export default function Home(){
    const [filter, setFilter] = useState<string>(FILTERS[0])
    return (
        <View style={styles.container}>
            <Filters filters={FILTERS} filter={filter} onChange={setFilter} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.black,
    },
    text: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 40,
        color: theme.colors.white,
    },
})
