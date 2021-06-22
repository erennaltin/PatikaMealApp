import React from 'react';
import LottieView from 'lottie-react-native';

const Error = props => {
  const anim1 = require('../animations/error.json');
  const anim2 = require('../animations/error2.json');

  const link = props.animation === 'error' ? anim1 : anim2;
  return <LottieView source={link} autoPlay loop />;
};

export default Error;
