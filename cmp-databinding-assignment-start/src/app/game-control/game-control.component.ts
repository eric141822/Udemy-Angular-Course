import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
    counter = 0;
    ref;
    @Output() startGame = new EventEmitter<number>();
    constructor() { }

    ngOnInit(): void {
    }

    onStart() {
        this.ref = setInterval(() => { this.startGame.emit(this.counter++) }, 1000);
    }

    onStop() {
        clearInterval(this.ref);
    }

}
