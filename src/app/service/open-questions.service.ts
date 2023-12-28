import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenQuestion } from '../model/open-question.model';
import { StringValue } from '../model/string-value.model';

@Injectable({
    providedIn: 'root',
})
export class OpenQuestionsService {
    constructor(private http: HttpClient) {}

    getOpenQuestions(category: string): Observable<OpenQuestion[]> {
        return this.http.get<OpenQuestion[]>(
            `http://localhost:8080/api/open-questions/${category}`
        );
    }

    getCategories(): Observable<StringValue[]> {
        return this.http.get<StringValue[]>(
            `http://localhost:8080/api/open-questions/categories`
        );
    }
}
