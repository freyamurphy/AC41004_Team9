import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharelocationService {
  private messageSource = new BehaviorSubject('None');
  currentMessage = this.messageSource.asObservable();

  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message)
    console.log(this.currentMessage);
  }
}
