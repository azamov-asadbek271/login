import { createContext, useReducer } from "react";
 
export const GlobalContect = createContext()

const changeState = (state,action) => {
   switch(action.type) {
      case "CHANGE_COLOR":
        return {...state, navbarColor: action.payload}
        case "CHANGE_USER": 
        return{...state, user: action.payload}
        default: 
        return state
   }
}
export function GlobalContextProdive ({children}) {
    const [state, dispatch] = useReducer(changeState , {
      user: null,
      navbarColor: "red",
    });
  

    return (
      <GlobalContect.Provider value={{ ...state,dispatch}}>
        {children}
      </GlobalContect.Provider>
    );
}