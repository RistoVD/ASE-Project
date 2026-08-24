import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Nav } from '../layout/nav/nav';

@Component({
  selector: 'app-root',
  imports: [Nav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private http = inject(HttpClient);
  protected title = 'StallR';
  protected owners = signal<any>([]);

  async ngOnInit() {
    this.owners.set(await this.getOwners());
  }
  async getOwners() {
    try {
      return lastValueFrom(this.http.get('http://localhost:5007/api/owner'));
    } catch (error) {
      console.log(error);
    }
    return this.http.get('http://localhost:5007/api/owner');
  }
}
