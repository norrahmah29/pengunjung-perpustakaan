import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { CapacitorHttp } from '@capacitor/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dataPengunjung: any[];

  constructor() {
    this.dataPengunjung = []; //array
    this.dataapi(); //untuk menandakan itu fungsi
  }
  async dataapi() { //function
    const options = {
      url: 'http://localhost/pengunjung_perpustakaan/apiambildata.php', //api itu sebenarnya url untuk ambil data
      headers: { 'Content-Type': 'application/json' },
    };

    console.log('Fetching data from API');

    try {
      const response = await CapacitorHttp.request({ //buat ambil data dari api nya
        ...options,
        method: 'GET', // Use GET method for fetching data
      });
      this.dataPengunjung = response.data; //variabel untuk menyimpan data dari api 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  async hapus(id: string) {
    try {
      const response = await CapacitorHttp.request({
        url: `http:// 192.168.43.103/pengunjung_perpustakaan/apihapusdata.php?id=${id}`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Data Berhasil Dihapus: ', response.data);
      location.reload();
    } catch (error) {
      console.error('error', error);
    }
  }
}
