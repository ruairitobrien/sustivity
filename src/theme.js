import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  cyan700,
  grey600,
  orange100, orange200, orange400,
  fullWhite
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

const Theme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: cyan700,
    primary2Color: cyan700,
    primary3Color: grey600,
    accent1Color: orange200,
    accent2Color: orange400,
    accent3Color: orange100,
    textColor: fullWhite,
    secondaryTextColor: fade(fullWhite, 0.7),
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12)
  },
  appBar: {
    height: 50
  }
});

export default Theme;
