import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/LOGOUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }

      case '@user/CREATE_USER': {
        draft.loading = true;
        break;
      }
      case '@user/CREATE_USER_SUCESS': {
        draft.loading = false;
        break;
      }
      case '@user/CREATE_USER_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
