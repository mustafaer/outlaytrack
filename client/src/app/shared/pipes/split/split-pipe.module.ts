import { NgModule } from '@angular/core';
import { SplitPipe } from './split.pipe';

@NgModule({
    declarations: [SplitPipe],
    exports: [SplitPipe],
    providers: [SplitPipe],
})
export class SplitPipeModule {
}
