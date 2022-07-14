import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    signupForm : FormGroup;
    ngOnInit() {
        this.signupForm = new FormGroup({
            'project': new FormControl(null, [Validators.required], this.asyncForbiddenProject),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'status': new FormControl(null)
        });
    }

    forbiddenProject(control: FormControl) : {[s: string]:boolean}{
        if (control.value === "Test"){
            return {'nameForbidden': true};
        }
        return null;
    } 

    asyncForbiddenProject(control: FormControl) : Promise<any> | Observable<any> {
        const p = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "test"){
                    resolve({'nameForbidden':true});
                }else{
                    resolve(null);
                }
            }, 1500);
        });
        return p;
    }
    onSubmit(){
        console.log(this.signupForm.get('project').value);
        console.log(this.signupForm.get('email').value);
        console.log(this.signupForm.get('status').value);
    }
}
