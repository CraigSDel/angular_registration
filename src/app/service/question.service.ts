import {Injectable} from '@angular/core';
import {QuestionBase} from '../model/registrationQuestion/question-base';
import {TextboxQuestion} from '../model/registrationQuestion/question-textbox';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getQuestions() {
    const questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'firstName',
        label: 'First Name',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'lastName',
        label: 'Last Name',
        required: true,
        order: 2
      }),
      new TextboxQuestion({
        key: 'cellNumber',
        label: 'Cell Number',
        required: true,
        order: 3
      }),
      new TextboxQuestion({
        key: 'physicalAddress',
        label: 'Physical Address',
        required: true,
        order: 4
      }),
      new TextboxQuestion({
        key: 'postalAddress',
        label: 'Postal Address',
        required: true,
        order: 5
      }),
      new TextboxQuestion({
        key: 'comments',
        label: 'Comments',
        required: true,
        order: 6
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
