import { createSlice } from "@reduxjs/toolkit";
import Pdata from "../../components/Product/Pdata";

export const counterSlice = createSlice({
  name: "appData",
  initialState: {
    value: Pdata,
    filters: [
      {
        name: "Men",
        active: false,
      },
      {
        name: "Women",
        active: false,
      },
      {
        name: "Boys",
        active: false,
      },
      {
        name: "Girls",
        active: false,
      },
    ],
    categories: [
      {
        name: "Shirts",
        active: false,
      },
      {
        name: "Sleep Shirts",
        active: false,
      },
      {
        name: "Dog shirts",
        active: false,
      },
    ],
    brands: [
      {
        name: "Zara",
        active: false,
      },
      {
        name: "Parx",
        active: false,
      },
      {
        name: "Roadster",
        active: false,
      },
      {
        name: "Harvard",
        active: false,
      },
      {
        name: "Wrogn",
        active: false,
      },
    ],
  },
  reducers: {
    filter: (state, action) => {
      // console.log(action);
      // console.log(state.value);
      const { payload } = action;
	  debugger
      switch (payload.type) {
        case "filter":
			 const filters = state.value.map((currData) => {
				//   console.log(currData);
				if (action.payload === currData.category) {
				  return { ...currData, visible: true };
				} else {
				  return { ...currData, visible: false };
				}
			  });
			  console.log(filters);
			  state.value = filters;
          break;
        case "category":
			// action.payload = ['zara','wrong'];
			const categories = state.value.map((currData) => {
				// in this function we will find all the brands selected present in the data ad show them visible as true
			   if(action.payload.value.find((category) => category === currData.category)) {
				   return { ...currData, visible: true };
			   }else {
				   return { ...currData, visible: false };
				 }
		   });
		   console.log(categories);
			 state.value = categories;
          break;
        case "brand":
			// action.payload = ['zara','wrong'];
			 const brands = state.value.map((currData) => {
				 // in this function we will find all the brands selected present in the data ad show them visible as true
				if(action.payload.value.find((brand) => brand === currData.pname)) {
					return { ...currData, visible: true };
				}else {
					return { ...currData, visible: false };
				  }
			});
			console.log(brands);
			  state.value = brands;
          break;

        default:
          break;
      }

      // action.payload will contain the value that should be used to filter the data.
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, filter } =
  counterSlice.actions;

export default counterSlice.reducer;
