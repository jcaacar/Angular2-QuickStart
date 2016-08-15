import { Injectable } from '@angular/core';


@Injectable()
export class StateService {

    getStates() {
        return ['Pernambuco', 'São Paulo', 'Rio de Janeiro', 'Coritiba', 'Bahia'];
    }
}