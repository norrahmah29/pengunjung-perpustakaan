import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PencatatanPengunjungPerpustakaanPage } from './pencatatan-pengunjung-perpustakaan.page';

describe('PencatatanPengunjungPerpustakaanPage', () => {
  let component: PencatatanPengunjungPerpustakaanPage;
  let fixture: ComponentFixture<PencatatanPengunjungPerpustakaanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PencatatanPengunjungPerpustakaanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
