import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { OpenQuestionsComponent } from './pages/open-questions/open-questions.component';

const routes: Routes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'article/:slug', component: ArticleComponent },
            { path: 'open-questions', component: OpenQuestionsComponent },
            { path: 'open-questions/:categoryId', component: OpenQuestionsComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
