import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule, MatMenuModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule} from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule} from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import 'hammerjs';


@NgModule({
  imports: [MatButtonModule,MatTableModule,
    MatAutocompleteModule,
    MatSnackBarModule, 
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatFormFieldModule, 
    MatProgressBarModule,
    MatStepperModule, 
    MatToolbarModule, 
    MatRadioModule, 
    MatIconModule, 
    MatChipsModule, 
    MatInputModule, 
    MatSelectModule, 
    MatListModule, MatSliderModule, MatTreeModule, MatTooltipModule, MatMenuModule, MatRippleModule, MatTabsModule, MatSidenavModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatDialogModule, MatGridListModule,MatBadgeModule],
  exports: [MatButtonModule,MatTableModule,MatAutocompleteModule,MatSnackBarModule, MatProgressSpinnerModule,MatCheckboxModule,MatFormFieldModule, MatProgressBarModule,MatStepperModule, MatToolbarModule, MatRadioModule, MatIconModule, MatChipsModule, MatInputModule, MatSelectModule, MatListModule, MatSliderModule, MatTreeModule, MatTooltipModule, MatMenuModule, MatRippleModule, MatTabsModule, MatSidenavModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatDialogModule, MatGridListModule,MatBadgeModule],
})
export class MaterialModule { }