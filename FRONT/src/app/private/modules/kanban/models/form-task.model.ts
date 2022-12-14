import { FormControl, FormGroup, Validators } from '@angular/forms'

interface FormTaskInterface {
    id: FormControl<string | null>,
    titulo: FormControl<string | null>
    conteudo: FormControl<string | null>
    lista: FormControl<string | null>
}

export class FormTaskModel {
    protected form: FormGroup<FormTaskInterface>

    constructor() {
        this.form = this.formBuilder()
    }

    private formBuilder(): FormGroup<FormTaskInterface> {
        return new FormGroup<FormTaskInterface>({
            id: new FormControl(''),
            titulo: new FormControl('', [Validators.required]),
            conteudo: new FormControl('', [Validators.required]),
            lista: new FormControl('ToDo', [Validators.required]),
        })
    }
}
