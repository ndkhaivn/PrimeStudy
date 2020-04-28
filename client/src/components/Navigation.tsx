import { h } from 'preact';
import { useRef } from 'preact/hooks';
import { Link } from 'preact-router';

import { useTranslation } from '../hooks/useTranslation';
import config from '../config';

export default function Navigation() {
    const langSelect = useRef<HTMLSelectElement>();
    const { t, setLang, lang } = useTranslation();

    return (
        <div>
            <h2>{t('text.navigation')}</h2>
            <Link href='/'>{t('text.home')}</Link>
            <br />
            <Link href='/teacher'>{t('text.teacher')}</Link>
            <br />
            <Link href='/student'>{t('text.student')}</Link>

            <h3>{t('text.select_language')}</h3>
            <select
                ref={langSelect}
                value={lang}
                onChange={() => setLang(langSelect.current?.value || lang)}
            >
                {
                    config.i18n.langs.map(
                        l => <option key={`select_language_${l}`} value={l}>{l}</option>,
                    )
                }
            </select>
        </div>
    );
}
