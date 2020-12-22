import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IAgent} from '../../types/agent.interface';

@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styles: [``]
})
export class CreateAgentComponent {
  public openCreateModal: boolean;
  public form!: FormGroup;
  @Output() invite: EventEmitter<IAgent> = new EventEmitter<IAgent>();

  constructor(private readonly fb: FormBuilder) {
    this.openCreateModal = false;
    this.buildForm();
  }

  private buildForm(): void {
    const validation = [Validators.required, Validators.minLength(3)];
    this.form = this.fb.group({
      name:         ['', validation],
      photo:        ['', validation],
      age:          [''],
      class:        ['', validation],
      nationality:  [''],
      description:  ['', validation]
    });
  }

  public save(): void {
    if (this.form.valid) {
      const newAgent: IAgent = this.form.getRawValue();
      this.invite.emit(newAgent);
      this.openCreateModal = !this.openCreateModal;
    }
  }
}
