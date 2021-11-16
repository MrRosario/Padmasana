import Constants from 'expo-constants';
import { Platform, Dimensions } from "react-native";

export const AppInfo = {
    APP_NAME: 'padmasana',
    APP_VERSION: '1.0.0',
    BUILD_NUMBER,
    BASE_URL: 'https://padmasana.com',
    DEVICE_NAME: Constants.deviceName,
    Android = Platform.OS === 'android',
    IOS = Platform.OS === 'ios',
    isWeb = Platform.OS = 'web'
}

export const Colors = {
    GENERAL: '',
    PRIMARY_COLOR: '',
    SECONDARY_COLOR: ''
}

export const Dimens = {
    HEIGHT: Dimensions.get('window').height,
    WIDTH: Dimensions.get('window').width,
    DATE_ITEM_WIDTH: 54,
    CAMPAIGN_CARD_HEIGHT: 60,
    FLOATING_TITLE_CONTAINER_HEIGHT: 60,
    FOOTER_HEIGHT: 65,
    SUGGESTION_CARD_HEIGHT: 72,
    HEADER_HEIGHT: 80,
    REAL_TIME_ITEM_HEIGHT: 120,
    // RESPONSIVE FONT SIZE
    FONT_SIZE_XXSMALL: Dimensions.get('window').width * 0.024, // +- 10px
    FONT_SIZE_XSMALL: Dimensions.get('window').width * 0.029, // +- 11px
    FONT_SIZE_SMALL: Dimensions.get('window').width * 0.033, // +- 12px
    FONT_SIZE_DEFAULT: Dimensions.get('window').width * 0.0375, // +- 14px
    FONT_SIZE_MEDIUM: Dimensions.get('window').width * 0.043, // +- 16px
    FONT_SIZE_LARGE: Dimensions.get('window').width * 0.053, // +- 20px
    FONT_SIZE_XLARGE: Dimensions.get('window').width * 0.0915, // +- 35px
  
    // RESPONSIVE PADDINGS / MARGINS
    SPACE_5: Dimensions.get('window').width * 0.012, // +- 5px
    SPACE_10: Dimensions.get('window').width * 0.024, // +- 10px
    SPACE_15: Dimensions.get('window').width * 0.04, // +- 15px
    SPACE_20: Dimensions.get('window').width * 0.053, // +- 20px
    SPACE_35: Dimensions.get('window').width * 0.0915, // +- 35px
  };
  
  export const Fonts = {
    BLACK: 'BLACK',
    BLACK_ITALIC: 'BLACK_ITALIC',
    BOLD: 'BOLD',
    BOLD_ITALIC: 'BOLD_ITALIC',
    EXTRA_BOLD: 'EXTRA_BOLD',
    EXTRA_BOLD_ITALIC: 'EXTRA_BOLD_ITALIC',
    EXTRA_LIGHT: 'EXTRA_LIGHT',
    EXTRA_LIGHT_ITALIC: 'EXTRA_LIGHT_ITALIC',
    ITALIC: 'ITALIC',
    LIGHT: 'LIGHT',
    LIGHT_ITALIC: 'LIGHT_ITALIC',
    MEDIUM: 'MEDIUM',
    MEDIUM_ITALIC: 'MEDIUM_ITALIC',
    REGULAR: 'REGULAR',
    SEMI_BOLD: 'SEMI_BOLD',
    SEMI_BOLD_ITALIC: 'SEMI_BOLD_ITALIC',
    THIN: 'THIN',
    THIN_ITALIC: 'THIN_ITALIC',
};