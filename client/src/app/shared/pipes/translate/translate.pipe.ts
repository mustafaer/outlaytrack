import {TranslateService} from '../../services/translate/translate.service';
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'translate',
    pure: false,
})
export class TranslatePipe implements PipeTransform {
    constructor(private translate: TranslateService) {
    }

    transform(value: any): any {
        if (!value) {
            return;
        }
        return this.translate.instant(value);
    }
}
