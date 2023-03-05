import {IS_AUTHTHENTICATED} from '../constants/AuthConstants';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {removeData, setData} from '../utils/asyncStorage';
import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signin = (userInfo : any) => {
    return async (dispatch: any) => {
    try {
        console.log('user nefkjwheuiofwerhfiouweh info', userInfo.user);
        // AsyncStorage.setItem('@user', JSON.stringify(userInfo)).then(() => {
        //     console.log('user info saved');
        // });
        // AsyncStorage.getItem('@user').then((user) => {
        //     console.log('user info', user);
        // });
        console.warn('user info jo dispatch hogi', userInfo);
        dispatch({type: IS_AUTHTHENTICATED, payload: userInfo});
    } catch (error) {
        dispatch({type: IS_AUTHTHENTICATED, payload: {
            user: null,
            error: error.message
        }});
    }
}};


export const signout = () => {
    return async (dispatch: any) => {
    try {
        // await removeData('user');
        dispatch({type: IS_AUTHTHENTICATED, payload: {
            user: null,
            error: ''
        }});
    } catch (error) {
        console.error(error);
    }
}};


export const isSignedIn = () =>  {
    return async (dispatch: any) => {
        try {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (isSignedIn) {
        const userInfo = await GoogleSignin.signInSilently();
        dispatch({type: IS_AUTHTHENTICATED, payload: {
            user: userInfo,
            error: ''
        }});
        }
        } catch (error) {
            console.error(error);
        }
    };
}

// async (dispatch: any) => {
//     try {
//         const isSignedIn = await GoogleSignin.isSignedIn();
//         if (isSignedIn) {
//         const userInfo = await GoogleSignin.signInSilently();
//         dispatch({type: IS_AUTHTHENTICATED, payload: {
//             user: userInfo,
//             error: ''
//         }});
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }