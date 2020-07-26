import React from 'react';

const AddedFeature = ({feature, removeFeature}) => {
  console.log('AddedFeature mapped props', feature)
  return (
    <li>
      {/* TODO Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeFeature(feature)} className="button">{feature.name}</button>
      
    </li>
  );
};

export default AddedFeature;

// const mapStateToProps = state => {
//   console.log('i am the state', state.car)
//   return {
//     features: state.car.features,
//   }
// }

// export default connect(mapStateToProps, {})(AddedFeature);
