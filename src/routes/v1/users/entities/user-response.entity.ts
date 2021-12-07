import { Exclude, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { PaginationParamsInterface } from '@interfaces/pagination-params.interface';
import { RolesEnum } from '@decorators/roles.decorator';
import { departmentEnum} from '@decorators/department.decorator';

export class UserResponseEntity {
  id: number = 0;

  role: RolesEnum = RolesEnum.user;

  verified: boolean = false;

  email: string = '';

  device_userId :string ='';

  valid_from: Date = new Date();

  department:departmentEnum = departmentEnum.IT;

  first_name: string ='';

  last_name: string ='';

  Telephone: number = 0;

  Employe_active: boolean = true;

  @Exclude()
  password: string = '';
}

export class AllUsersResponseEntity {
  @ValidateNested({ each: true })
  @Type(() => UserResponseEntity)
  data?: [] = []

  collectionName?: string = '';

  options?: {
    location: string,
    paginationParams: PaginationParamsInterface,
    totalCount: number,
  }
}
