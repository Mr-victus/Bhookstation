import { Dimensions, Platform, PixelRatio } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const type = {
  base: 'OpenSans-Regular',
  ...Platform.select({
    ios: {
      bold: 'OpenSans-Bold',
    },
    android: {
      bold: 'OpenSans-Bold',
    }
  }),
  normal: 'OpenSans-Regular',
  emphasis: 'OpenSans-Italic'
}
// const type={
//   base: 'OpenSans-Regular',
//   ...Platform.select({
//     ios: {
//       bold: 'OpenSans-Bold',
//     },
//     android: {
//       bold: 'OpenSans-Bold',
//     }
//   }),
//   normal: 'OpenSans-Regular',
//   emphasis: 'OpenSans-Italic'
// }
const opensansType={
  base: 'OpenSans-Regular',
  ...Platform.select({
    ios: {
      bold: 'OpenSans-Bold',
    },
    android: {
      bold: 'OpenSans-Bold',
    }
  }),
  normal: 'OpenSans-Regular',
  emphasis: 'OpenSans-Italic'
}
const weight = {
  base: '200',
  ...Platform.select({
    ios: {
      bold: 'bold',
    },
    android: {
      bold: '200',
    }
  }),
  ...Platform.select({
    ios: {
      normal: 'bold',
    },
    android: {
      normal: '200',
    }
  }),
  emphasis: '200'
}
// based on iphone Xs's scale
const scale = SCREEN_WIDTH / 375;

function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}


const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  h1: {
    fontFamily: opensansType.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: opensansType.emphasis,
    fontSize: size.h3
  },
  h4: {
    fontFamily: opensansType.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: opensansType.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: opensansType.emphasis,
    fontSize: size.h6
  },
  normal: {
    fontFamily: opensansType.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: opensansType.base,
    fontSize: size.medium
  }
}

export default {
  type,
  opensansType,
  weight,
  size,
  style,
  normalize
}
