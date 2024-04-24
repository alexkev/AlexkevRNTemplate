import {
  AppRegistry
} from 'react-native';
import name from './app.json';
import App from './src/App';

// Generate the required CSS
import MaterialCommunityIcons from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import MaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
const iconFontStyles = `@font-face {
    src: url(${MaterialCommunityIcons});
    font-family: MaterialCommunityIcons;
  }

  @font-face {
    src: url(${MaterialIcons});
    font-family: MaterialCommunityIcons;
  }
  `;

// Create a stylesheet
const style = document.createElement('style');
style.type = 'text/css';

// Append the iconFontStyles to the stylesheet
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject the stylesheet into the document head
document.head.appendChild(style);

AppRegistry.registerComponent(name, () => App);
AppRegistry.runApplication(name, {
  initialProps: {},
  rootTag: document.getElementById('app-root')
});