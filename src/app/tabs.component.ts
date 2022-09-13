import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'tabs',
  template: `
  <ul class="nav">
    <li class="nav-item" *ngFor="let link of navs">
      <a class="nav-link active" aria-current="page" href="#">
        <ng-container *ngIf="linkTemplate; else noTemplate">
          <ng-container 
            *ngTemplateOutlet="linkTemplate; context:{$implicit:link}"
          >
          </ng-container>
        </ng-container>
        <ng-template #noTemplate>
          {{link}}
        </ng-template>
      </a>
    </li>
  </ul>
  `,
})
export class TabsComponent {
  @Input() navs: string[];
  @Input() linkTemplate: TemplateRef<any>;
}
