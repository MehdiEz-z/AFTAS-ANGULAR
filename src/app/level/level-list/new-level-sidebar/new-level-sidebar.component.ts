import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

@Component({
  selector: 'app-new-level-sidebar',
  templateUrl: './new-level-sidebar.component.html'
})
export class NewLevelSidebarComponent implements OnInit {

  public description = "";
  public points = 0;
  constructor(private _coreSidebarService: CoreSidebarService) { }

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  submit(form) {
    if (form.valid) {
      this.toggleSidebar('new-level-sidebar');
    }
  }
  ngOnInit(): void {
  }

}
