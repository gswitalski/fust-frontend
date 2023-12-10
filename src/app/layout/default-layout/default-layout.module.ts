import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [DefaultLayoutComponent, HomeComponent],
    imports: [CommonModule, RouterModule],
})
export class DefaultLayoutModule {}
