import { Component, inject, input, Input, signal } from '@angular/core';
import { Nav } from '../../layout/nav/nav';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { User } from '../../types/user';
import { Owner, RegisterOwner } from '../../types/owner';

@Component({
  selector: 'app-owners',
  imports: [FormsModule],
  templateUrl: './owners.html',
  styleUrl: './owners.css',
})
export class Owners {
  private http = inject(HttpClient);
  protected title = 'StallR';
  protected creds = {} as RegisterOwner;

  protected owners = signal<Owner[]>([]);
  async setOwners() {
    this.owners.set(await this.getOwners());
  }

  async getOwners() {
    try {
      return lastValueFrom(this.http.get<Owner[]>('http://localhost:5007/api/owner'));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  register() {
    console.log(this.creds);
  }
}
