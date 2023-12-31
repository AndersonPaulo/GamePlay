import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';
 
export const styles = StyleSheet.create({

    container:{
        flex : 1,
        justifyContent : 'center',
        alignItems: 'center',
        backgroundColor:theme.colosr.background
    },
    image:{
        width: '100%',
        height: 360
    },
    content:{
        marginTop:-40,
        paddingHorizontal: 50,
    },
    title:{
        color: theme.colosr.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom:16,
    },
    subtitle:{
        color: theme.colosr.heading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom:64,

    }

})