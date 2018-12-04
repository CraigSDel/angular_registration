import {Component} from '@angular/core';
import {QuestionControlService} from './service/question-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionControlService]
})
export class AppComponent {
  title = 'my-first-app';
}
