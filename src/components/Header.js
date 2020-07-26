import React from 'react';
import { connect } from 'react-redux'

const Header = props => {
  // console.log('props from header', props)
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

// export default Header;


const mapStateToProps = state => {
  return {
    image: state.car.image,
    name: state.car.name,
    price: state.car.price
  }
}

export default connect(mapStateToProps, {})(Header)

