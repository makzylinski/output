import { Component, output } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

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
  age$ = outputFromObservable(of(this.age))

  setNewName = (newName: string) => this.onNameChange.emit(newName);

  setNewAge = (newAge: number) => this.onAgeChange.emit(newAge);
}
