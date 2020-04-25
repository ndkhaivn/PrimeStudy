import { h } from 'preact';
import { Router } from 'preact-router';

import { useTranslation } from '../hooks/useTranslation';

export default function MainPanel() {
    const { t } = useTranslation();
    return (
        <div>
            <h2>{t('text.main_panel')}</h2>
            <Router>
                <div default>{t('text.home')}</div>
                <div path='/teacher'>{t('text.teacher')}</div>
                <div path='/student'>{t('text.student')}</div>
            </Router>
        </div>
    );
}
