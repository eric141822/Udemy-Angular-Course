import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    showPara: boolean = false;
    arr = [];
    onClick() {
        this.showPara = !this.showPara;
        this.arr.push(new Date());
    }

    getColor(item) {
        return (item >= 4) ? 'blue' : '';
    }
}
