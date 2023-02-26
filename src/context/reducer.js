import React from "react";

// const initialState = {
//   user: null,
//   isLoading: false,
//   days: [],
//   goals:[],
//   oldDays:0,
//   showAlert: false,
//   alertMsg:'',
//   editItem: null,
//   singleJobError: false,
//   editComplete: false,
// };

const reducer = (state, action) => {
  // set loading
  if (action.type === "SET-LOADING") {
    return { ...state, isLoading: true, showAlert: false, editComplete: false };
  }
  // register user success
  if (action.type === "REGISTER-USER-SUCCESS") {
    return { ...state, isLoading: false, user: action.payload };
  }
  // register user error
  if (action.type === "REGISTER-USER-ERROR") {
    return { ...state, isLoading: false, user: null, showAlert: true };
  }
  // set user
  if (action.type === "SET-USER") {
    return { ...state, user: action.payload };
  }
  // logout user
  if (action.type === "LOGOUT-USER") {
    return { ...state, user: null, showAlert: false, days: [], editItem: null };
  }
  // set old days
  if (action.type === "SET-OLD-DAYS") {
    console.log(action.payload)
    return { ...state, days: action.payload };
  }
  // set object in data
  if (action.type === "SET-OBJECT-IN-DATA") {
    // set Data, and swap undefined to object with id property and data
    let index = 0;
    const data = action.payload;
    // console.log(data);
    const newArray = data.map((item) => {
      return item.map((item) => {
        return (item = {
          id: index++ + 1,
          data: 0,
        });
      });
    });
    return { ...state, days: newArray };
  }
  // remove single day
  if (action.type === "REMOVE-SINGLE-DAY") {
    const newDays = state.days.map((item) => {
      return item.filter((item) => {
        return item.id !== action.payload;
      });
    });
    return { ...state, days: newDays };
  }
  // get total of days
  if (action.type === "GET-TOTAL-OF-DAYS") {
    return { ...state, totalDays: action.payload };
  }
  // toggle create goal modal
  if (action.type === "TOGGLE-CREATE-GOAL-MODAL") {
    if (action.payload.desc === "open" && action.payload.id) {
      return { ...state, isModalOpen: true, setID: action.payload.id };
    }
    if (action.payload.desc === "close") {
      return { ...state, isModalOpen: false };
    }
  }
  // create goal success
  if (action.type === "CREATE-GOAL-SUCCESS") {
    return {
      ...state,
      isLoading: false,
      goals: [...state.goals, action.payload],
    };
  }
  if (action.type === "CREATE-GOAL-ERROR") {
    return { ...state, isLoading: false, showAlert: true };
  }

  // fetch goals success
  if (action.type === "FETCH-GOALS-SUCCESS") {
    return {
      ...state,
      isLoading: false,
      editItem: null,
      singleJobError: false,
      editComplete: false,
      goals: action.payload,
    };
  }
  if (action.type === "FETCH-GOALS-ERROR") {
    return { ...state, isLoading: false };
  }
};

export default reducer;
