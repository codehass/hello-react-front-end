import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'http://localhost:3000/api/v1/greetings';

const FETCH_GREETINGS = 'greetings/FETCH';

const initialState = {
  greeting: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_GREETINGS}/fulfilled`:
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};

export const fetchGreeting = createAsyncThunk(FETCH_GREETINGS, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});
