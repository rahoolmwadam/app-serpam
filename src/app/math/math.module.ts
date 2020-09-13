import { ModuleWithProviders, NgModule } from '@angular/core';
import { MathServiceImpl } from './math.service';
import { MathDirective } from './math.directive';

@NgModule({
  declarations: [MathDirective],
  exports: [MathDirective]
})
export class MathModule {
  constructor(mathService: MathServiceImpl) {
    console.log(`constructor module`);
    // see https://docs.mathjax.org/en/latest/advanced/dynamic.html


    const config = document.createElement('script') as HTMLScriptElement;
    config.type = 'text/javascript';
    config.text = `

    MathJax = {
      startup: {
        typeset: false,
        pageReady: () => {
          return MathJax.startup.defaultPageReady().then(() => {
            window.hubReady.next();
            window.hubReady.complete();
          });
        }
      },
      tex: {
        inlineMath: [["$", "$"]],
        displayMath: [["$$", "$$"]]
      }
    };
    `;

    document.getElementsByTagName('head')[0].appendChild(config);
    let script = document.createElement('script') as HTMLScriptElement;
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    script.async = true;

    document.getElementsByTagName('head')[0].appendChild(script);
  }


  public static forRoot(): ModuleWithProviders<NgModule> {
    return {
      ngModule: MathModule,
      providers: [{ provide: MathServiceImpl, useClass: MathServiceImpl }]
    };
  }
}