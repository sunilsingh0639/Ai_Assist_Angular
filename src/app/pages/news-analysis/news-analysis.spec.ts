import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAnalysis } from './news-analysis';

describe('NewsAnalysis', () => {
  let component: NewsAnalysis;
  let fixture: ComponentFixture<NewsAnalysis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsAnalysis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsAnalysis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
