export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const ODDCASE = 'ODDCASE';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = addClick => {
  // Fill in this function
  return {
    type: INCREMENT,
    payload: addClick
  }
};

export const decrement = minusClick => {
  // Fill in this function
  return {
    type: DECREMENT,
    payload: minusClick
  }
};

export const incrementIfOdd = specialClick => {

  return {
    type: ODDCASE,
    payload: specialClick,
  }
};