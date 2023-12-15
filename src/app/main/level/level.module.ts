import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';


import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { Ng2FlatpickrModule } from "ng2-flatpickr";

import { CoreCommonModule } from "../../../@core/common.module";
import { CoreDirectivesModule } from "../../../@core/directives/directives";
import { CorePipesModule } from "../../../@core/pipes/pipes.module";
import { CoreSidebarModule } from "../../../@core/components";

// level
import { LevelListComponent } from "./level-list/level-list.component";
import {LevelListService} from "./level-list/level-list.service";
import { LevelAddComponent } from './level-add/level-add.component';

// routing
const routes: Routes = [
    {
        path: "list",
        component: LevelListComponent,
        data: { animation: "LevelListComponent" },
    },
    {
        path: "add",
        component: LevelAddComponent,
        data: { animation: "LevelAddComponent" },
    },
    {
        path: "**",
        redirectTo: "list",
        pathMatch: "full",
    },
];

@NgModule({
    declarations: [LevelListComponent, LevelAddComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CoreCommonModule,
        FormsModule,
        ContentHeaderModule,
        NgbModule,
        NgSelectModule,
        Ng2FlatpickrModule,
        NgxDatatableModule,
        CorePipesModule,
        CoreDirectivesModule,
        CoreSidebarModule,
    ],
    providers: [LevelListService],
})
export class LevelModule {}