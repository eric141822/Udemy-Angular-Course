import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('f', { static: true }) form: NgForm;

    onSubmit() {
        console.log("Email: " + this.form.value.email);
        console.log("Subscription: " + this.form.value.subscription);
        console.log("Password: " + this.form.value.password);

        this.form.reset();
    }
}
