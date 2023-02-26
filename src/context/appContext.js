import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "./reducer";
import "../axios";
import axios from "axios";


const AppContext = React.createContext();

const initialState = {
  user: null,
  isLoading: false,
  days: [],
  goals: [],
  totalDays:0,
  persistDays: JSON.parse(localStorage.getItem('days')),
  setID: 0,
  isModalOpen: false,
  showAlert: false,
  alertMsg: "",
  // editItem: null,
  // singleGoalError: false,
  // editComplete: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [call, setCall] = useState("");
  // minus for minus number that removed from array of arrays from totalDays
  const [minus, setMinus] = useState(0);



  // loading
  const setLoading = () => {
    dispatch({ type: "SET-LOADING" });
  };

  // register user
  const register = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post("/auth/register", {
        ...userInput,
      });
      dispatch({ type: "REGISTER-USER-SUCCESS", payload: data.user.name });
      localStorage.setItem(
        "user",
        JSON.stringify({ name: data.user.name, token: data.token })
      );
    } catch (error) {
      dispatch({ type: "REGISTER-USER-ERROR" });
    }
  };

  // login user
  const login = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post("/auth/login", {
        ...userInput,
      });
      dispatch({ type: "REGISTER-USER-SUCCESS", payload: data.user.name });
      localStorage.setItem(
        "user",
        JSON.stringify({ name: data.user.name, token: data.token })
      );
      const oldDays = localStorage.getItem('days')
      if(oldDays){
        const days = JSON.parse(oldDays)
        dispatch({type:'SET-OLD-DAYS',payload:days})
      }
    } catch (error) {
      dispatch({ type: "REGISTER-USER-ERROR" });
    }
  };

  // logout user
  const logOut = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT-USER" });
  };

  // set object in data with two properties id and data
  const setObjectInData = () => {
    dispatch({ type: "SET-OBJECT-IN-DATA", payload: data });
  };

  // remove single day
  const removeSingleDay = (id) => {
    dispatch({ type: "REMOVE-SINGLE-DAY", payload: id });
    setMinus(minus + 1);
  };
  // get total of days
  const getTotalOfDays = (number) => {
    dispatch({ type: "GET-TOTAL-OF-DAYS", payload: number });
  };

  // toggle create goal modal
  const toggleCreateGoalModal = (desc, id) => {
    dispatch({ type: "TOGGLE-CREATE-GOAL-MODAL", payload: { desc, id } });
  };

  // create goal
  const createGoal = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post("/goals", {
        ...userInput,
      });
      dispatch({ type: "CREATE-GOAL-SUCCESS", payload: data.goal });
    } catch (error) {
      dispatch({ type: "CREATE-GOAL-ERROR" });
    }
  };

  // fetch goals
  const fetchGoals = async () => {
    try {
      const { data } = await axios.get("/goals");
      dispatch({ type: "FETCH-GOALS-SUCCESS", payload: data.goals });
    } catch (error) {
      dispatch({ type: "FETCH-GOALS-ERROR" });
    }
  };

  // persist user
  useEffect(() => {
    const user = localStorage.getItem("user");
    // console.log(user);
    if (user) {
      const newUser = JSON.parse(user);
      dispatch({ type: "SET-USER", payload: newUser.name });
    }
  }, []);

  // --------–––––––------------–––––––––---------–––––––––-------
  // persist days when reload the page
  useEffect(() => {
    dispatch({type:'SET-OLD-DAYS',payload:state.persistDays})
  }, []);

  useEffect(() => {
    localStorage.setItem('days',JSON.stringify(state.days))
  }, [state.days,data]);

  
  // -------------––––------------–––––––––---------––––––—-------–
  useEffect(() => {
    setObjectInData();
    setMinus(0);
    // if you remove setCall(''), the duplicate submit number doesn't work
    setCall("");
  }, [call]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        setLoading,
        register,
        login,
        logOut,
        data,
        setData,
        page,
        setPage,
        call,
        setCall,
        removeSingleDay,
        getTotalOfDays,
        minus,
        toggleCreateGoalModal,
        createGoal,
        fetchGoals,
        setObjectInData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
