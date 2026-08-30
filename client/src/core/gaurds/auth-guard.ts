import { CanActivateFn } from '@angular/router';
import { AccountService } from '../services/account-service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const accountService = inject(AccountService)

  if(accountService.currentUser()) return true
  else {
    alert("Not Available")
    return false;
  }

};
