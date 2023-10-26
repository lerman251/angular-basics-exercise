import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
    title: string = "this is what i want";
    content: string = "leeman is the best!";
    isTechRelated: boolean = true;

    getColor() {
      return this.isTechRelated === true ? 'blue' : 'yellow';
  }
}