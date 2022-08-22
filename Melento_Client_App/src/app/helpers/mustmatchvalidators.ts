import { FormGroup } from "@angular/forms";

export function MustMatch(controlPassword: string, matchingControlPassword: string) {
    return(formgroup: FormGroup) => {
        const control = formgroup.controls[controlPassword];
        const matchingControl = formgroup.controls[matchingControlPassword];

        if(matchingControl.errors && !matchingControl.errors['mustMatch']) {
            return;
        }

        if(control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true});
        }
        else {
            matchingControl.setErrors(null);
        }
    }
}