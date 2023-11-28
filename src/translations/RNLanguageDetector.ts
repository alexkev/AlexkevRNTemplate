import { Settings, I18nManager, Platform } from 'react-native';
import { LanguageDetectorModule } from 'i18next';

export const RNLanguageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  init: () => {},
  detect,
  cacheUserLanguage: () => {},
};

function detect() {
  let currentLocale = 'en';

  if (Platform.OS === 'ios') {
    const settings = Settings.get('AppleLocale');

    const locale = settings || settings?.[0];
    if (locale) {
      currentLocale = locale;
    }
  } else {
    const locale = I18nManager.getConstants().localeIdentifier;
    if (locale) {
      currentLocale = locale;
    }
  }

  return currentLocale.split('_')[0];
}
