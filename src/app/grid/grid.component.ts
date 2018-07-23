import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit {
  public data: Object[];
  public pageSettings: Object;
  public filterSettings: Object;
  constructor() { }

  ngOnInit() {
    this.data = [
      { OrderID: 10248, CustomerName: 'Maria', CustomerID: 'VINET', Freight: 32.38, ShipCountry: 'France' },
      { OrderID: 10249, CustomerName: 'Ana Trujillo', CustomerID: 'TOMSP', Freight: 11.61, ShipCountry: 'Belgium' },
      { OrderID: 10250, CustomerName: 'Antonio Moreno', CustomerID: 'HANAR', Freight: 65.83, ShipCountry: 'Brazil' },
      { OrderID: 10251, CustomerName: 'Thomas Hardy', CustomerID: 'VICTE', Freight: 41.34, ShipCountry: 'Switzerland' },
      { OrderID: 10252, CustomerName: 'Christina Berglund', CustomerID: 'SUPRD', Freight: 51.3, ShipCountry: 'Switzerland' },
      { OrderID: 10253, CustomerName: 'Hanna Moos', CustomerID: 'HANAR', Freight: 58.17, ShipCountry: 'Brazil' },
      { OrderID: 10254, CustomerName: 'Frédérique Citeaux', CustomerID: 'CHOPS', Freight: 22.98, ShipCountry: 'Venezuela' },
      { OrderID: 10255, CustomerName: 'Martín Sommer', CustomerID: 'RICSU', Freight: 148.33, ShipCountry: 'Austria' },
      { OrderID: 10256, CustomerName: 'Laurence Lebihan', CustomerID: 'WELLI', Freight: 13.97, ShipCountry: 'Mexico' },
    ];
    this.pageSettings = { pageSize: 5 };
    this.filterSettings = { type: 'Menu' };
  }

}
