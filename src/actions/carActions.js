export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = (feature) => {
  console.log("carActions.js addFeature name:", feature);
  return { type: ADD_FEATURE, payload: feature };
};

export const removeFeature = (featureName) => {
  return { type: REMOVE_FEATURE, payload: featureName };
};
