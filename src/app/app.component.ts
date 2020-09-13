import { Component } from '@angular/core';
import {MathContent} from './math/math-content';

@Component({
  selector: 'app-serpam',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular';

  mathLatex: MathContent = {
    latex: 'When $a \\ne 0$, there are two solutions to $\\frac{5}{9}$'
  };
}
