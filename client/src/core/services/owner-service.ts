import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { AccountService } from './account-service';
import { Owner } from '../../types/owner';

@Service()
export class OwnerService {
    private http = inject(HttpClient);
    private baseUrl = 'http://localhost:5007/api/';
    private accountService = inject(AccountService);

    getOwners(){
        return this.http.get<Owner[]>(this.baseUrl + 'owner', this.getHttpOptions())
    };
    getOwner(id: string){
        return this.http.get<Owner>(this.baseUrl + 'owner/' + id, this.getHttpOptions())
    }
    private getHttpOptions(){
        return{
            headers: new HttpHeaders({
                Authorization: 'Bearer '+ this.accountService.currentUser()?.token
            })
        }
    }
}
