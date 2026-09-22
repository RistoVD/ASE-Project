import { ResolveFn, Router } from '@angular/router';
import { Owner } from '../../types/owner';
import { inject } from '@angular/core';
import { OwnerService } from '../services/owner-service';
import { EMPTY } from 'rxjs';

export const ownerResolver: ResolveFn<Owner[]> = (route, state) => {
const ownerService = inject(OwnerService)
const router = inject(Router)
const ownerId = route.paramMap.get('id')

if (!ownerId){
  router.navigateByUrl('/not-found')
  return EMPTY
}

return ownerService.getOwners()
};
