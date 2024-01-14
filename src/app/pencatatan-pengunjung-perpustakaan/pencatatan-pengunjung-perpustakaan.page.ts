import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitorHttp } from '@capacitor/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
// import { AccessService } from '../service/access.service';

@Component({
  selector: 'app-pencatatan-pengunjung-perpustakaan',
  templateUrl: './pencatatan-pengunjung-perpustakaan.page.html',
  styleUrls: ['./pencatatan-pengunjung-perpustakaan.page.scss'],
})
export class PencatatanPengunjungPerpustakaanPage implements OnInit {
  nama: string = '';
  nim: string = '';
  prodi: string = '';
  disableButton: boolean = false;

  newPengunjung = { nama: '', nim: '', prodi: '' };
  constructor(
    private router: Router,
    private toast: ToastController,
    private alert: AlertController,
    private load: LoadingController,
    // private access: AccessService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.disableButton = false;
  }

  async tambahPengunjung(): Promise<boolean> {
    if (this.nama == '') {
      this.presentToast('Nama Harus diisi');
      return false;
    } else if (this.nim == '') {
      this.presentToast('Nim harus diisi');
      return false;
    } else if (this.prodi == '') {
      this.presentToast('Prodi harus diisi');
      return false;
    } else {
      this.disableButton = true;

      const loading = await this.load.create({
        message: 'Mohon tunggu...'
      });
      await loading.present();

      return new Promise<boolean>((resolve) => {
        let body = {
          aksi: 'tambah',
          nama: this.nama,
          nim: this.nim,
          prodi: this.prodi
        };

        // this.access.crud(body, 'api.php').subscribe(
        //   (res: any) => {
        //     this.access.crud(body, 'api.php').subscribe(
        //       (res: any) => {
        //         if (res && res.success === true) {
        //           loading.dismiss();
        //           this.presentToast('Data berhasil ditambahkan');
        //           resolve(true);
        //           this.clearForm();
        //         } else {
        //           loading.dismiss();
        //           this.presentToast('Data gagal ditambahkan');
        //           resolve(false);
        //         }
        //       },
        //       (err) => {
        //         loading.dismiss();
        //         console.error('Error:', err);
        //         this.presentToast('Terjadi kesalahan pada server');
        //         resolve(false);
        //       }
        //     );
        //   }
        // );
      });
    }
  }
  async presentToast(message: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
  async clearForm() {
    this.nama = '';
    this.nim = '';
    this.prodi = '';
    this.disableButton = false;
  }

  async tambah(){
    try {
      const response = await CapacitorHttp.request({ // nama fungsi harus ada async untuk memanggil capacitor http
        url:'http://localhost/pengunjung_perpustakaan/apitambahdata.php',
        method: 'POST',
        data: this.newPengunjung,
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Book added successfully:', response.data);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  }

  async tambahData() {
    try {
      const response = await CapacitorHttp.request({
        url: 'http:// 192.168.43.103/pengunjung_perpustakaan/apitambahdata.php',
        method: 'POST',
        data: this.newPengunjung,
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Book added successfully:', response.data);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  }

}
