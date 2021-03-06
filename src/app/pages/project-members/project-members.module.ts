/**
 * © Rolling Array https://rollingarray.co.in/
 *
 * long description for the file
 *
 * @summary Project members page module
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-11-15 21:34:14 
 * Last modified  : 2021-11-15 21:36:06
 */

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { AvatarModule } from "src/app/component/avatar/avatar.component.module";
import { BreadcrumbModule } from "src/app/component/breadcrumb/breadcrumb.component.module";
import { CreateEditProjectUserModule } from "src/app/component/create-edit-project-user/create-edit-project-user.component.module";
import { CustomFieldsModule } from "src/app/component/custom-fields/custom-fields-fields.component.module";
import { NoDataModule } from "src/app/component/no-data/no-data.component.module";
import { PageInfoTitleModule } from "src/app/component/page-info-title/page-info-title.component.module";
import { PanelHeaderModule } from "src/app/component/panel-header/panel-header.component.module";
import { PanelInfoModule } from "src/app/component/panel-info/panel-info.component.module";
import { SharedModule } from "src/app/shared/module/shared.module";
import { ProjectMembersPage } from "./project-members.page";

const routes: Routes = [
  {
    path: '',
    component: ProjectMembersPage
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    CreateEditProjectUserModule,
    NoDataModule,
    PageInfoTitleModule,
    PanelHeaderModule,
    PanelInfoModule,
    BreadcrumbModule,
    AvatarModule,
    CustomFieldsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectMembersPage]
})
export class ProjectMembersPageModule {}
