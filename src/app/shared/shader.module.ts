import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [

  ],
  providers: [

  ],
  exports: [

  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
