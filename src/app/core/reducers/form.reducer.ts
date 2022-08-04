export const SET_FORM = 'SET_FORM';

export function formReducer(state = [], action): any {
  switch (action.type) {
    case SET_FORM:
      return {...state, [action.payload.path]: action.payload.value};
    default:
      return state;
  }
}
