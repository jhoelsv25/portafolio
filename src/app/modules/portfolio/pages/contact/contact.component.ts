import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  public messageText: string = '';
  public errorType: any = '';
  public viewAlert: boolean = false;

  contact: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    asunt: ['', [Validators.required, Validators.minLength(15)]],
    message: ['', [Validators.required, Validators.minLength(25)]],
  });

  ngOnInit(): void {}
  formContact() {
    if (this.contact.valid) {
      const data = this.contact.value;
      this.errorType = 'success';
      this.viewAlert = true;
      this.messageText = 'El Mensaje se envio correctamente';
      setTimeout(() => {
        this.viewAlert = false;
      }, 5000);
    } else {
      this.errorType = 'error';
      this.viewAlert = true;
      this.messageText = 'Tienes que Completar todos los campos';
      setInterval(() => {
        this.viewAlert = false;
      }, 5000);
    }
  }
  getErrorMessage(controlName: string): string {
    const message = this.contact.get(controlName);
    if (message?.hasError('required')) {
      return 'Este campo es requerido.';
    }

    if (message?.hasError('minlength')) {
      return `El valor debe tener al menos ${message.errors?.['minlength']?.requiredLength} caracteres.`;
    }

    if (message?.hasError('email')) {
      return 'El formato del correo electrónico es inválido.';
    }

    return '';
  }
}
