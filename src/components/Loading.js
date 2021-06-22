import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = props => {
  const anim1 = require('../animations/loading.json');
  const anim2 = require('../animations/loading2.json');

  const link = props.animation === 'loading' ? anim1 : anim2;
  return <LottieView source={link} autoPlay loop />;
};

export default Loading;
