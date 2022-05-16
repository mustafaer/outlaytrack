import {Inject, Injectable} from '@angular/core';
import {CustomFunctions} from "../../models/custom-function.model";
import {TRANSLATIONS} from "./translation";

@Injectable()
export class TranslateService {
    customFunctions: CustomFunctions = new CustomFunctions();
    private currentLangValue: string | null = this.customFunctions.getLocalStorage(this.customFunctions.storageItems.lang)

    constructor(@Inject(TRANSLATIONS) private translations: any) {
    }

    public get currentLang(): string {
        if (this.currentLangValue == null) {
            this.customFunctions.setLocalStorage(this.customFunctions.storageItems.lang, 'en');
            return 'en'; // if localeStorage is null for language, set as 'en'
        } else {
            if (this.currentLangValue.length > 2) {
                this.currentLangValue = this.currentLangValue.split('_')[1];
            }
            return this.currentLangValue;
        }
    }

    public instant(key: string): string {
        // call translation
        return this.translate(key);
    }

    private translate(key: string): string {
        // private perform translation
        const translation = key;

        if (this.translations[this.currentLang] && this.translations[this.currentLang][key]) {
            return this.translations[this.currentLang][key];
        }

        return translation;
    }
}