import React from 'react';
import {connect} from 'react-redux'

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  // console.log('addedfeatures.js', props)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map((item, idx) => (
            <AddedFeature key={idx} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

// export default AddedFeatures;


const mapStateToProps = state => {
  return {
    features: state.car.features
  }
}

export default connect(mapStateToProps, {})(AddedFeatures)

