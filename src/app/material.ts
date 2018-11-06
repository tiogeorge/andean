import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatMenuModule } from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatTreeModule} from '@angular/material/tree';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRippleModule} from '@angular/material/core';
import 'hammerjs';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatChipsModule, MatInputModule,MatSelectModule,MatListModule,MatSliderModule,MatTreeModule,MatTooltipModule, MatMenuModule, MatRippleModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule, MatIconModule, MatChipsModule, MatInputModule,MatSelectModule,MatListModule,MatSliderModule,MatTreeModule,MatTooltipModule, MatMenuModule, MatRippleModule],
})
export class MaterialModule { }