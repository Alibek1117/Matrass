// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   token: false
// };

// export const tokenSlice = createSlice({
//   name: "token",
//   initialState,
//   reducers: {
//     getToken: (state) => {
//       state.token = true;
//     },
//         getToken: (state) => {
//             fetch("http://localhost:1212/admin/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(obj),
//         })
//           .then((res) => res.json())
//           .then((data) => state.token = data.token)
//       }
//   },
//   // loginAdminSuccess: (state) => {},
//   // loginAdminFailure: (state) => {},
// });

// export const { getToken } = tokenSlice.actions;
// export default tokenSlice.reducer;
