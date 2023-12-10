import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleCard } from '../model/article-card.model';

@Injectable({
    providedIn: 'root',
})
export class ArticlesService {
    constructor(private http: HttpClient) {}

    getLatesArticles(): Observable<ArticleCard[]> {
        return this.http.get<ArticleCard[]>('http://localhost:8080/api/articles/latest');
    }
}
