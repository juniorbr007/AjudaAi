import { Component, OnInit } from '@angular/core';

import { AppModule } from 'src/app/app.module';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-auxilios',
  templateUrl: './auxilios.component.html',
  styleUrls: ['./auxilios.component.scss']
})
export class AuxiliosComponent implements AppModule  {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  moradiaSub = `Destinado aos estudantes de outras cidades ou Estados diferente de onde funciona o seu curso de Graduação.`;
  residenciaSub= `Destinada aos estudantes de cidades diferentes daquela onde funciona o seu curso de graduação.`;
  restauranteSub= `Destinada de forma gratuita para discentes selecionados por edital.`;
  transporteSub= `Destina-se aos estudantes que necessitam fazer o percurso para o campus sede do curso de graduação em transporte coletivo.`;
  preescolarSub= `Destina-se aos estudantes para auxiliar nas despesas pré-escolares de filhos ou dependentes com até 06 anos de idade incomplestos.`;
  crecheSub= `Designa-se aos estudantes que têm filhos de seis meses a três anos e onze meses de idade.`;
  constructor() { }

}
