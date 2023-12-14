import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CoreConfigService } from '@core/services/config.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { LevelListService} from "./level-list.service";

@Component({
  selector: 'app-level-list',
  templateUrl: './level-list.component.html',
  styleUrls: ['./level-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LevelListComponent implements OnInit {
  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public searchValue = '';
  public ColumnMode = ColumnMode;
  public temp = [];
  //
  @ViewChild(DatatableComponent) table: DatatableComponent;

  private tempData = [];
  private _unsubscribeAll: Subject<any>;

  constructor(
      private _levelListService: LevelListService,
      private _coreSidebarService: CoreSidebarService,
      private _coreConfigService: CoreConfigService
  ) {
    this._unsubscribeAll = new Subject();
  }

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // Filter Our Data
    const temp = this.tempData.filter(function (d) {
      return d.description.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // Update The Rows
    this.rows = temp;
    // Whenever The Filter Changes, Always Go Back To The First Page
    this.table.offset = 0;
  }

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  ngOnInit(): void {
    this._levelListService.getDataTableRows();
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      //! If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this._levelListService.onLevelListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response.data;
            this.tempData = this.rows;
          });
        }, 450);
      } else {
        this._levelListService.onLevelListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          this.rows = response.data;
          this.tempData = this.rows;
        });
      }
    });
  }

}
