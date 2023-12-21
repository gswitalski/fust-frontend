import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/model/article.model';
import { ArticlesService } from 'src/app/service/articles.service';

@Component({
    selector: 'fust-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
    article: Article;
    slug: string;

    constructor(private route: ActivatedRoute, private articlesService: ArticlesService) {}

    ngOnInit(): void {
        this.slug = this.route.snapshot.params['slug'];

        this.articlesService.getArticle(this.slug).subscribe((article) => {
            this.article = article;
        });
    }
}
