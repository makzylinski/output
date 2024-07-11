import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { outputToObservable } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})

export class ParentComponent implements OnInit {
  @ViewChild('childComponent', {read: ViewContainerRef}) childComponent: ViewContainerRef;

  ngOnInit(): void {
      
  }

  displayNewName = (name: string) => console.log(name);

  displayNewAge = (age: number) => console.log(age);

  onShowComponent = () => {
    this.childComponent.clear();
    const childComp = this.childComponent.createComponent(ChildComponent);

    outputToObservable(childComp.instance.age$).pipe(tap((age) => console.log('The age is ' + age))).subscribe();
  }
}
