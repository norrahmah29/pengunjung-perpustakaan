import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PencatatanPengunjungPerpustakaanPage } from './pencatatan-pengunjung-perpustakaan.page';

const routes: Routes = [
  {
    path: '',
    component: PencatatanPengunjungPerpustakaanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PencatatanPengunjungPerpustakaanPageRoutingModule {}
