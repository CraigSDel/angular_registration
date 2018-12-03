import {Component} from '@angular/core';
import {QuestionService} from '../../service/question.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

}
