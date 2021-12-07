import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
} from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';
import { RolesEnum } from '@decorators/roles.decorator';
import { departmentEnum } from '@decorators/department.decorator';

@Entity('users')
export default class UserEntity {
  @ApiProperty({ type: String })
  @PrimaryGeneratedColumn()
  readonly id: number = 1;

  @ApiProperty({ type: String, maxLength: 64 })
  @Column({ length: 64 })
  readonly password: string = '';

  @ApiProperty({ type: String, maxLength: 64 })
  @Column({ length: 64 })
  @Index({ unique: true })
  readonly email: string = '';

  @ApiProperty({ type: Boolean })
  @Column({ type: 'tinyint' })
  readonly verified: boolean = false;

  // @ApiProperty({ type: Boolean })
  // @Column({ type: 'tinyint' })
  // readonly  : boolean = false;

  @ApiProperty({type:String})
  @Column({type:String})
  readonly device_userId: string ='';

  // Date 
  @ApiProperty({type:Date})
  @Column({type:Date})
  readonly valid_from: Date = new Date();

  @ApiProperty({type:String,default:departmentEnum,enum:departmentEnum})
  @Column({type:'enum',enum:departmentEnum,default:departmentEnum.IT})
  readonly department: departmentEnum = departmentEnum.IT;

  @ApiProperty({ type: String, default: RolesEnum.user, enum: RolesEnum })
  @Column({ type: 'enum', enum: RolesEnum, default: RolesEnum.user })
  readonly role: RolesEnum = RolesEnum.user;

  @ApiProperty({type:String})
  @Column({type:String})
  readonly first_name: String ='';

  @ApiProperty({type:String})
  @Column({type:String})
  readonly last_name: String ='';

  @ApiProperty({type:Number,maxLength:10})
  @Column({type:Number})
  readonly Telephone:Number = 0;

  @ApiProperty({type:Boolean})
  @Column({type:'tinyint'})
  readonly Employe_active:boolean = true;


}

