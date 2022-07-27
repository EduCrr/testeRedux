import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
  name: "user",
  initialState: {
    name: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },

    setLogOut: (state) => {
      return (state = { name: "" });
    },
  },
});

export const { setName, setLogOut } = Slice.actions;

export default Slice.reducer;
