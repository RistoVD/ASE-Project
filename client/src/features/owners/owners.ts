import { Component, inject, signal } from '@angular/core';
import { Nav } from '../../layout/nav/nav';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-owners',
  imports: [],
  templateUrl: './owners.html',
  styleUrl: './owners.css',
})
export class Owners {
  private http = inject(HttpClient);
  protected title = 'StallR';

  protected owners = signal<any>([]);
  async setOwners() {  this.owners.set(await this.getOwners())}



  async getOwners() {
    try {
      return lastValueFrom(this.http.get('http://localhost:5007/api/owner'));
    } catch (error) {
      console.log(error);
    }
    return this.http.get('http://localhost:5007/api/owner');
  }
}
