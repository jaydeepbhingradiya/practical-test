import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entries: [],
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addEntry: (state, action) => {
      state.entries.push(action.payload);
    },
    updateEntry: (state, action) => {
      const index = state.entries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      if (index !== -1) {
        state.entries[index] = action.payload;
      }
    },
  },
});

export const { addEntry, updateEntry } = crudSlice.actions;
export default crudSlice.reducer;
