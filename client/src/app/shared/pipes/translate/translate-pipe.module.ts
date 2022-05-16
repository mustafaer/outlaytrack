import { NgModule } from '@angular/core';
import { TranslatePipe } from './translate.pipe';
import { TranslateService } from '../../services/translate/translate.service';
import { TRANSLATION_PROVIDERS } from '../../services/translate/translation';

@NgModule({
    imports: [],
    declarations: [TranslatePipe],
    exports: [TranslatePipe],
    providers: [
        TranslatePipe,
        TranslateService,
        TRANSLATION_PROVIDERS,
    ],
})

export class TranslatePipeModule {

}
