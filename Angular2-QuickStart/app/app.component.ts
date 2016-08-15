import { Component } from '@angular/core';

import { FirstComponent } from './first/first.component';
import { StateComponent } from './state/state.component';

@Component({
    selector: 'my-app',
    template: `
            <h1>My First Angular 2 App</h1>
            <first-component></first-component>
            <state-list></state-list>
    `,
    directives: [FirstComponent, StateComponent]
})
export class AppComponent { }
