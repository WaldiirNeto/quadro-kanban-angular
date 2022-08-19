import { FormControl, FormGroup, Validators } from '@angular/forms'

interface FormLoginInterface {
    login: FormControl<string | null>
    senha: FormControl<string | null>
}

export class FormLoginModel {
    protected form: FormGroup<FormLoginInterface>

    constructor() {
        this.form = this.formBuilder()
    }

    private formBuilder(): FormGroup<FormLoginInterface> {
        return new FormGroup<FormLoginInterface>({
            login: new FormControl('', [Validators.required]),
            senha: new FormControl('', [Validators.required]),
        })
    }
}
