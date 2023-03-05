import {isSignedIn} from '../actions/auth';
import {IS_AUTHTHENTICATED} from '../constants/AuthConstants';

export interface AuthState {
  user: any;
  error: string;
}

const initialState: AuthState = {
  user: null,
  error: '',
};

export default function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case IS_AUTHTHENTICATED:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
