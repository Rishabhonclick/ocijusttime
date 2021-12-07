import { SetMetadata } from '@nestjs/common';

export enum departmentEnum {
  workshop = 'workshop',
  IT = 'IT'
}

export const Departments = (...departmentroles: departmentEnum[]) => SetMetadata('departmentroles', departmentroles);
