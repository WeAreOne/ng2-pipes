import { Component } from '@angular/core';

import { SummaryPipe } from './posts/shared';
import { FromNowPipe } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  pipes: [ SummaryPipe, FromNowPipe ]
})
export class AppComponent {
  title = 'app works!';
}
