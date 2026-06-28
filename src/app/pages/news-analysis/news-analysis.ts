import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { News } from '../../core/services/news';

@Component({
  selector: 'app-news-analysis',
  imports: [CommonModule],
  templateUrl: './news-analysis.html',
  styleUrl: './news-analysis.scss',
})
export class NewsAnalysis implements OnInit{
news: any[] = [];

  constructor(private newsSvc: News) {}

  ngOnInit(): void {
    this.newsSvc.getNews()
      .subscribe(res => {
        this.news = res;
      });
  }
}
