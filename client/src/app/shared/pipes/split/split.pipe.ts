import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'split'
})
export class SplitPipe implements PipeTransform {

    transform(text: string | undefined | null, by: string, index: number = 1): any {
        if (!text) {
            return;
        }
        const arr = text.split(by); // split text by "by" parameter
        return arr[index].trim(); // after splitting to array return wanted index
    }

}
