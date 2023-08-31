import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PlyrModule } from 'projects/ngx-plyr/src/public_api';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [PlyrModule]
})
export class AppModule { }
