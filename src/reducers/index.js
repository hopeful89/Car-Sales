import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/carActions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const dummyReducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case ADD_FEATURE:
      //TODO add conditional to keep the state from changing on additional adds will need to compare ids
      return {
        ...state,
        car: {...state.car, features: [...state.car.features, action.payload] },
        additionalPrice: state.additionalPrice += action.payload.price,
        additionalFeatures: state.additionalFeatures.filter(obj => obj.id !== action.payload.id)
      };
    case REMOVE_FEATURE:
      console.log('this is remove feature', action.payload.id)
      //TODO: should be very similar to add just using a filter of state.car.features
      //make sure to pass in the object to compare a name/id
      //dont forget to remove the price from the total as well
      return {
        ...state,
        car: {...state.car, features: state.car.features.filter(obj=> obj.id !== action.payload.id) },
        additionalPrice: state.additionalPrice -= action.payload.price,
        additionalFeatures: [...state.additionalFeatures, action.payload]//could add sort for state to keep them in same order based on id/name/etc
      };
    default:
      return state;
  }
};
