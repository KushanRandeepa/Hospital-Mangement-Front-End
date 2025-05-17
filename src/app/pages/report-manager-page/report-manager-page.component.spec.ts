import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportManagerPageComponent } from './report-manager-page.component';

describe('ReportManagerPageComponent', () => {
  let component: ReportManagerPageComponent;
  let fixture: ComponentFixture<ReportManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportManagerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
