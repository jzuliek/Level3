import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GamePagePage } from './game-page.page';

describe('GamePagePage', () => {
  let component: GamePagePage;
  let fixture: ComponentFixture<GamePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GamePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
