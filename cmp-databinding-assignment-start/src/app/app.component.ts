import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    numOdd: number[] = [];
    numEven: number[] = [];
    onInterval(num) {
        console.log(num);
        if (num % 2 === 0) {
            this.numEven.push(num);
        }
        else {
            this.numOdd.push(num);
        }
    }
}
