import { OpaqueToken } from '@angular/core';


import { LANG_EN_NAME, LANG_EN_TRANS } from './../properties/lang-en';
import { LANG_PT_NAME, LANG_PT_TRANS } from './../properties/lang-pt';


// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all translations
const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_PT_NAME]: LANG_PT_TRANS    
};

// providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];