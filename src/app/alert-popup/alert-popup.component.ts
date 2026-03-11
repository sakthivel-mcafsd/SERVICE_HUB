import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
 
@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.css'],
  animations: [
    trigger('popupAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-40px)' }),
        animate('300ms ease-out',
        style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in',
        style({ opacity: 0, transform: 'translateY(-40px)' }))
      ])
    ])
  ]
})
export class AlertPopupComponent {
 
  @Input() message: string = '';
  @Input() type: 'success' | 'error' | 'warning' = 'success';
 
  show = true;
 
  close(){
    this.show = false;
  }
 
}