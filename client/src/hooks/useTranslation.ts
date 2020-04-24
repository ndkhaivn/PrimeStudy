import { useState, useCallback, useEffect } from 'preact/hooks'

import config from '../config';
import { emptyObj } from '../utility';

interface IDict
{
    [key: string]: string;
}

export function useTranslation()
{
    const [ lang, setLang ] = useState(config.i18n.defaultLang);

    const languageSetter = useCallback((newLang: string) => {
        if (config.i18n.langs.includes(newLang) && lang !== newLang) setLang(newLang);
    }, [ lang ]);

    const [ dict, setDict ] = useState<IDict>(emptyObj);

    useEffect(() => {
        fetch(`${config.i18n.dir}/${lang}.json`)
            .then(r => r.json())
            .then(setDict);
    }, [ lang ]);

    const translate = useCallback((str: string): string => {
        return dict[str] || str;
    }, [ lang ]);

    return {
        setLang: languageSetter,
        setLanguage: languageSetter,
        translate,
        t: translate,
        lang,
        language: lang,
    };
}
