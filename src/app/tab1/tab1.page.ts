import { Component } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
} from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  private offers: any = [];
  private loading: boolean = true;

  constructor(protected httpClient: HttpClient) {}

  loadOffer() {
    // fetch offers
    this.httpClient
      .get('http://emploi.nat.tn/fo/Fr/dynamique/api/offre.php')
      .subscribe((offers) => {
        console.log('offre reçu:', offers);
        this.offers = offers;
        this.loading = false;
      });
  }

  ionViewWillEnter() {}
  clickOnFirstOffer() {}
}
