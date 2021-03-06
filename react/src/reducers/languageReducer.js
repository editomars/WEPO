import cookies from 'js-cookie';
import en from '../../resources/localization_EN-en.json';
import is from '../../resources/localization_IS-is.json';
import { CHANGE_LANGUAGE } from '../constants/constants';

// Get cookie
const locale = cookies.get('locale');
const intialState = locale === 'en' ? en : is;

const languageReducer = (state = intialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            const language = action.payload === 'en' ? en : is;
            cookies.set('locale', action.payload);
            return Object.assign({}, state, language);
        default: return state;
    };
};

export default languageReducer;
