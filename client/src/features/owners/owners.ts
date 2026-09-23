import { Component, inject, input, Input, signal, ViewChild } from '@angular/core';
import { Nav } from '../../layout/nav/nav';
import { lastValueFrom, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../types/user';
import { Owner, RegisterOwner } from '../../types/owner';
import { OwnerService } from '../../core/services/owner-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-owners',
  imports: [AsyncPipe,FormsModule],
  templateUrl: './owners.html',
  styleUrl: './owners.css',
})
export class Owners {
    @ViewChild('registerForm') registerForm?: NgForm;

  private ownerService = inject(OwnerService)  
  protected owners$: Observable<Owner[]>;
  
  
    
    constructor(){
      this.owners$ = this.ownerService.getOwners()
    }

    register(creds: RegisterOwner) {
      this.ownerService.registerOwner(creds).subscribe(() =>{
        this.owners$ = this.ownerService.getOwners()
        this.registerForm?.resetForm();        
      })
    }
}
