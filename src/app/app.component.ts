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
  myDate = new Date(1470002400000);
  myPost = { body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?' }
}
