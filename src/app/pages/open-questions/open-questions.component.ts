import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenQuestion } from 'src/app/model/open-question.model';
import { StringValue } from 'src/app/model/string-value.model';
import { OpenQuestionsService } from 'src/app/service/open-questions.service';

@Component({
    selector: 'fust-open-questions',
    templateUrl: './open-questions.component.html',
    styleUrls: ['./open-questions.component.scss'],
})
export class OpenQuestionsComponent {
    constructor(
        private openQuestionsService: OpenQuestionsService,
        private route: ActivatedRoute
    ) {}

    questions: OpenQuestion[] = [];
    categories: StringValue[] = [];
    categoryId: string;

    ngOnInit() {
        this.openQuestionsService.getCategories().subscribe((data) => {
            this.categories = data;
        });


        // subscribe to route params
        this.route.params.subscribe((params) => {
            // when params change, fetch the open questions
            this.categoryId = params['categoryId'];
            this.openQuestionsService
                .getOpenQuestions(this.categoryId)
                .subscribe((data) => {
                    this.questions = data;
                });
        });
    }
}
