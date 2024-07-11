import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  onNameChange = output<string>();
  onAgeChange = output<number>({alias: 'changedAge'});

  name = '';
  age = 0;

  setNewName = (newName: string) => this.onNameChange.emit(newName);

  setNewAge = (newAge: number) => this.onAgeChange.emit(newAge);
}
