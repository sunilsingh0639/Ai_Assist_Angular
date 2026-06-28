import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramAnalysis } from './telegram-analysis';

describe('TelegramAnalysis', () => {
  let component: TelegramAnalysis;
  let fixture: ComponentFixture<TelegramAnalysis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelegramAnalysis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelegramAnalysis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
