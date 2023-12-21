import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleCard } from '../model/article-card.model';
import { Article } from '../model/article.model';

@Injectable({
    providedIn: 'root',
})
export class ArticlesService {
    constructor(private http: HttpClient) {}

    getLatesArticles(): Observable<ArticleCard[]> {
        return this.http.get<ArticleCard[]>('http://localhost:8080/api/articles/latest');
    }

    getArticle(slug: string): Observable<Article> {
        return this.http.get<Article>(`http://localhost:8080/api/articles/${slug}`);
    }
}
