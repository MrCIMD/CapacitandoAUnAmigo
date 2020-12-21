import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styles: [``]
})
export class CreateAgentComponent {
  public openCreateModal: boolean;
  public form!: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.openCreateModal = false;
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      name:         [],
      photo:        [],
      age:          [],
      class:        [],
      nationality:  [],
      description:  []
    });
  }
}
