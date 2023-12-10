import { Component } from '@angular/core';
import { ArticleCard } from 'src/app/model/article-card.model';
import { ArticlesService } from 'src/app/service/articles.service';

@Component({
    selector: 'fust-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    constructor(private articlesService: ArticlesService) {}

    latestArticles: ArticleCard[] = [];

    ngOnInit() {
        this.articlesService.getLatesArticles().subscribe((data) => {
            this.latestArticles = data;
        });
    }
}
