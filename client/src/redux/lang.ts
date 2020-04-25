import config from '../config';

export const SET_LANGUAGE = 'SET_LANGUAGE';

export function actionSetLanguage(lang: string)
{
    return {
        type: SET_LANGUAGE,
        payload: { lang },
    };
}

type LanguageAction = ReturnType<typeof actionSetLanguage>;
export default function(state = config.i18n.defaultLang, action: LanguageAction): string
{
    switch (action.type)
    {
        case SET_LANGUAGE:
            return action.payload.lang;
        default:
            return state;
    }
}
