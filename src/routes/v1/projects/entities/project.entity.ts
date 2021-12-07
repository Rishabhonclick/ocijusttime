import { Exclude, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { PaginationParamsInterface } from '@interfaces/pagination-params.interface';
import { RolesEnum } from '@decorators/roles.decorator';
import { departmentEnum} from '@decorators/department.decorator';

export class ProjectsResponseEntity {
  id: number = 0;

//verified: boolean = false;

  Assigne: string = '';

  device_userId :string ='';

  department:departmentEnum = departmentEnum.IT;

  Projectname: string ='';

  role: RolesEnum = RolesEnum.admin;

  title: string ='';

  description: string ='';

  start_Date: Date = new Date();

  end_Date: Date = new Date();

  action : String ="";


//   Telephone: number = 0;

//   Employe_active: boolean = true;

//   @Exclude()
//   password: string = '';

}

// export class AllUsersResponseEntity {
//   @ValidateNested({ each: true })
//   @Type(() => UserResponseEntity)
//   data?: [] = []

//   collectionName?: string = '';

//   options?: {
//     location: string,
//     paginationParams: PaginationParamsInterface,
//     totalCount: number,
//   }
// }
