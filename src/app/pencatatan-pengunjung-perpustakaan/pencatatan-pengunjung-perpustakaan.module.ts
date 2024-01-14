import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PencatatanPengunjungPerpustakaanPageRoutingModule } from './pencatatan-pengunjung-perpustakaan-routing.module';

import { PencatatanPengunjungPerpustakaanPage } from './pencatatan-pengunjung-perpustakaan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PencatatanPengunjungPerpustakaanPageRoutingModule
  ],
  declarations: [PencatatanPengunjungPerpustakaanPage]
})
export class PencatatanPengunjungPerpustakaanPageModule {}
