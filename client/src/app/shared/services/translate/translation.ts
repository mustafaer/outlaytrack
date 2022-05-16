import { InjectionToken } from '@angular/core';

import { LANG_EN_NAME, LANG_EN_TRANS } from '../../languages/lang-en';
import { LANG_TR_NAME, LANG_TR_TRANS } from '../../languages/lang-tr';

export const TRANSLATIONS = new InjectionToken('translations');

export const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_TR_NAME]: LANG_TR_TRANS,
};

export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];
