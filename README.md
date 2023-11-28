# Alexkev's React Native Template

## Folder Structure and Naming Conventions
```
.
├─@types
├─android
├───yada yada yada
├─ios
├───yada yada yada
├─scripts
├─src
├───components 
├───hooks
├───navigation
├───screens
├─────{StackName}
├───store
├───theme
├─────assets
├───────images
└───translations
```

- Use PascalCase for Component names (e.g. `MyComponent.tsx`).
- All folders must have a `index.ts` file that exports all the files in that folder. This is to make importing easier. 


## State Management
-  Zustand
-  react-native-mmkv (for persisting state to storage)

Why? Zustand is a simple, lightweight state management solution. It is a tiny wrapper around the React Context API.It is also very easy to use and understand. See [here](https://github.com/pmndrs/zustand) for more information.

Redux 🥊 Zustand 🐻
- No boilerplate code 🚫
- Simple and un-opinionated
- Makes hooks the primary means of consuming state
- Doesn't wrap your app in context providers
- [Can inform components transiently (without causing render)](https://github.com/pmndrs/zustand#transient-updates-for-often-occurring-state-changes)

Why? react-native-mmkv is a persistent storage solution. It is a wrapper around the native MMKV library. MMKV is 20x faster than AsyncStorage see [here](https://github.com/mrousavy/react-native-mmkv#benchmark).


**Flipper required plugins:**
- zustandstore
- react-native-mmkv
  
## Navigation
As expected we will use **React Navigation**. Please also utilize and update the StackParamList Types here: [@types/navigation.d.ts](./@types/navigation.d.ts)

**Flipper required plugins:**
- react-navigation

## Testing
- React Native Testing Library see [here](https://callstack.github.io/react-native-testing-library/docs/getting-started) for more information
- Jest, as the test runner

We will NOT be using jest snapshots, "They may help you and your team quickly add coverage to the project. And at the same time, snapshots make adding low-quality and hard-to-maintain tests too easy." - [***The Ultimate Guide to React Native Optimization***](https://www.callstack.com/ebook/the-ultimate-guide-to-react-native-optimization). Instead we will be using the [***Testing Library***](https://testing-library.com/docs/react-native-testing-library/intro/) because it encourages testing the behaviour of the application from the user’s perspective, rather than testing the internal implementation details. 


## Translations
- i18n (i18next, react-i18next)

### Usage
In the translations folder each language will have a file containing a `.json` file. The key for each translation is the same as the value. For example:
```json
{
  "hello": "hello"
}
```

These tranlations can be used in the app by importing the `useTranslation` hook from `react-i18next` and using it like so:
```jsx
import { useTranslation } from 'react-i18next';

export const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>{t('hello');}</div>
  );
};
```

Each line is parsed by running `npx i18next-parser` (which is configured in [i18next-parser.config.js](./i18next-parser.config.js)) and added to the keys of all the lanaguage files. The [./scripts/translate-empty-strings.js](./scripts/translate-empty-strings.js) script then translates the corresponding language files. This has been simnplified to `npm run i18n` which runs both scripts.


# Styling 
-  Icons (react-native-vector-icons) 
   -  Only MaterialCommunityIcons & MaterialIcons were add to optimized bundle size
   -  Use [this icon directory](https://oblador.github.io/react-native-vector-icons/) to find icons


# Credit
- This a hard fork of [this repo](https://github.com/thecodingmachine/react-native-boilerplate/tree/main) by [TheCodingMachine](https://thecodingmachine.github.io/react-native-boilerplate/). See there site for more  information.
- @alexkev translations script, zustand store, and react-native-mmkv setup
- 
- Inspiration from this book: [***The Ultimate Guide to React Native Optimization***](https://www.callstack.com/ebook/the-ultimate-guide-to-react-native-optimization)