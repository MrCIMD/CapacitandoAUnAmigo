import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IAgent} from '../../../types/agent.interface';
import {IWeapon} from '../../../types/weapon.interface';

@Component({
  selector: 'app-create-weapon',
  templateUrl: './create-weapon.component.html',
  styles: [``]
})
export class CreateWeaponComponent {
  public openCreateModal: boolean;
  public form!: FormGroup;
  @Output() created: EventEmitter<IWeapon> = new EventEmitter<IWeapon>();

  constructor(private readonly fb: FormBuilder) {
    this.openCreateModal = false;
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      name:         ['', [Validators.required]],
      photo:        ['', [Validators.required]],
      description:  ['', [Validators.required]],
      damageHead:   ['', [Validators.required]],
      damageBody:   ['', [Validators.required]],
      damageLegs:   ['', [Validators.required]],
    });
  }

  public save(): void {
    if (this.form.valid) {
      const newWeapon: IWeapon = this.form.getRawValue();
      this.created.emit(newWeapon);
      this.openCreateModal = !this.openCreateModal;
    }
  }
}
