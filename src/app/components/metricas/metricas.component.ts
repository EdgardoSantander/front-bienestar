import { ChangeDetectionStrategy, Component , OnInit, Signal} from '@angular/core';
import {ButtonModule} from 'primeng/button'
//import { Product } from '@/domain/product';
//import { ProductService } from '@/service/productservice';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { MetricaService } from '../../service/metrica.service';


interface Column {
    field: string;
    header: string;
    customExportHeader?: string;
}

interface ExportColumn {
    title: string;
    dataKey: string;
}

export interface Metrica{
    id: number,
		pasosTotales: number,
		frecuenciaCardiaca: number,
		presionArterialSys: number,
		presionArterialDia: number,
		suenioCont: number|0,
		ejercicioCont: number,
		ritmoCardiacaTotal: number
}

@Component({
  selector: 'app-metricas',
  imports: [ButtonModule,TableModule,CommonModule],
  standalone: true,
  templateUrl: './metricas.component.html',
  styleUrl: './metricas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetricasComponent implements OnInit {

    products: Metrica[] = [];

   // selectedProducts!: Product[];

    constructor(private metricaService: MetricaService) {}

    cols!: Column[];

    exportColumns!: ExportColumn[];

    ngOnInit() {
        this.metricaService.obtenerMetricas().subscribe((data) =>

          {
          this.products = data
          }

        );

        this.cols = [
            { field: 'id', header: 'Id', customExportHeader: 'Product Code' },
            { field: 'pasosTotales', header: 'Pasos Totales' },
            { field: 'frecuenciaCardiaca', header: 'Frecuencia Cardiaca' },
            { field: 'presionArterialSys', header: 'Presion Sys' },
            { field: 'presionArterialDia', header: 'Presion Dia' },
            { field: 'suenioCont', header: 'Suenio min.' },
            { field: 'ejercicioCont', header: 'Ejercicio min.' },
            { field: 'ritmoCardiacaTotal', header: 'Ritmo Cardiaco' }
        ];

        this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
    }

 }
