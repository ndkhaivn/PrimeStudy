import { useState, useCallback, useEffect } from 'preact/hooks'
import { useSelector, useDispatch } from 'react-redux';

import { actionSetLanguage } from '../redux/lang';
import { RootState } from '../redux/reducers';
import { emptyObj } from '../utility';
import config from '../config';

interface Dict
{
    [key: string]: string;
}

const CACHE: { [key: string]: Dict } = {};

export function useTranslation() {

    const dispatch = useDispatch();
    const lang = useSelector((s: RootState) => s.lang);

    const languageSetter = useCallback((newLang: string) => {
        if (config.i18n.langs.includes(newLang) && lang !== newLang) {
            dispatch(actionSetLanguage(newLang));
        }
    }, [ lang ]);

    const [ dict, setDict ] = useState<Dict>(emptyObj);

    useEffect(() => {
        if (CACHE[lang]) {
            setDict(CACHE[lang]);
            return;
        }

        fetch(`${config.i18n.dir}/${lang}.json`)
            .then(r => r.json())
            .then(d => CACHE[lang] = d)
            .then(setDict);
    }, [ lang ]);

    const translate = useCallback((str: string): string => {
        return dict[str] || str;
    }, [ dict ]);

    return {
        setLang: languageSetter,
        setLanguage: languageSetter,
        translate,
        t: translate,
        lang,
        language: lang,
    };
}
