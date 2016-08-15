import { Component } from '@angular/core';

import { StateService } from '../state/state.service';


@Component({
    moduleId: module.id,
    selector: 'state-list',
    templateUrl: 'state.component.html',
    providers: [StateService]
})
export class StateComponent {

    country = 'Brasil';
    states = [''];

    constructor(stateService: StateService) {
        this.states = stateService.getStates();
    }
}