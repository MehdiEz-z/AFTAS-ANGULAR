import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CoreSidebarService } from '../../../../@core/components/core-sidebar/core-sidebar.service';
import { LevelListService} from "./level-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-level-list',
  templateUrl: './level-list.component.html',
  styleUrls: ['./level-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LevelListComponent implements OnInit {
  public rows;
  public selectedOption = 10;
  public searchValue = '';
  public ColumnMode = ColumnMode;
  public tempData = [];
  private _unsubscribeAll: Subject<any>;
  public contentHeader: object;

  //
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(
      private router: Router,
      private _levelListService: LevelListService,
      private _coreSidebarService: CoreSidebarService,
  ) {
    this._unsubscribeAll = new Subject();
  }

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();
    this.rows = this.tempData.filter(function (d) {
      return d.description.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.table.offset = 0;
  }

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  ngOnInit(): void {
    this._levelListService.getDataTableRows();
    this._levelListService.onLevelListChanged
        .pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response.data;
      this.tempData = this.rows;
    });

    this.contentHeader = {
      headerTitle: 'List Level',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'List Level',
            isLink: false
          }
        ]
      }
    };
  }

}
