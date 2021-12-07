  import {Entity,Column,PrimaryGeneratedColumn,Index,} from 'typeorm';
  import {ApiProperty} from '@nestjs/swagger';
  import { RolesEnum } from '@decorators/roles.decorator';
  import { departmentEnum} from '@decorators/department.decorator';

  @Entity('projects')
  export default class projectEntity {
    @ApiProperty({ type: String })
    @PrimaryGeneratedColumn()
    readonly id: number = 1;

    @ApiProperty({type:String,maxLength:6})
    @Column({length:6})
    readonly device_userId: string = '';  

    @ApiProperty({type:String, default:departmentEnum.IT, enum:departmentEnum})
    @Column({type:'enum',enum:departmentEnum,default:departmentEnum.IT})
    readonly department: departmentEnum = departmentEnum.IT;
    
    // @ApiProperty({type:String})

    // @PrimaryGeneratedColumn()
    
    @ApiProperty({ type: String, default: RolesEnum.admin, enum: RolesEnum })
    @Column({ type: 'enum', enum: RolesEnum, default: RolesEnum.admin })
    readonly role: RolesEnum = RolesEnum.admin;

    // @ApiProperty({type:String})
    

  }
