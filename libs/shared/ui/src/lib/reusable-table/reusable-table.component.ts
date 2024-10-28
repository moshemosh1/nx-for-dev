import { CommonModule } from '@angular/common';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, Input, ViewChild, inject} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {BaseTable} from '../../../../../types/src/lib/types/types'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'lib-reusable-table',
  standalone: true,
  imports: [CommonModule,MatTableModule, MatSortModule,MatPaginatorModule],
  templateUrl: './reusable-table.component.html',
  styleUrl: './reusable-table.component.css',
})
export class ReusableTableComponent implements AfterViewInit {
  
  @Input()
  tableProp!: BaseTable;
  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    if (this.tableProp) {
      this.displayedColumns = this.tableProp.columns;
      this.dataSource.data = this.tableProp.data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }


  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
