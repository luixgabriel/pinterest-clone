import {View, StyleSheet, Text} from 'react-native'
import { theme } from '@/theme'

export default function Search(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello world</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.gray[800],
    },
    text: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 40,
        color: theme.colors.white,
    },
})
