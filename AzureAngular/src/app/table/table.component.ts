import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
@NgModule({
  imports: [],
  exports: [TableComponent],
  declarations: [TableComponent],
  providers: [],
})
export class TableComponent {
  displayedColumns = ['Status', 'Base', 'Description', 'Amount', 'CumAmt', 'PouredAmt'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  Status: string
  Base: string;
  Description: string;
  Amount: string;
  CumAmt: string;
  PouredAmt: string;
}

const ELEMENT_DATA: Element[] = [
  {Status: "None", Base: '352-91', Description: 'Testing', Amount: '16.13', CumAmt: '16.13', PouredAmt: '0'},
  {Status: "None", Base: 'A929', Description: 'Testing', Amount: '8.27', CumAmt: '24.4', PouredAmt: '0'},
  {Status: "None", Base: 'M25', Description: 'Testing', Amount: '75.61 ', CumAmt: '100', PouredAmt: '0'}
];