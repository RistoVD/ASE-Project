import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { AccountService } from './account-service';
import { Owner, RegisterOwner } from '../../types/owner';

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
    registerOwner(creds: RegisterOwner){
        return this.http.post<void>(this.baseUrl + 'owner/register', creds)
        
    }
    private getHttpOptions(){
        return{
            headers: new HttpHeaders({
                Authorization: 'Bearer '+ this.accountService.currentUser()?.token
            })
        }
    }
}
