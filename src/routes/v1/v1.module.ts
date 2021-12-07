import { Module } from '@nestjs/common';
import { Routes, RouterModule } from 'nest-router';
import { ProjectsModule } from './projects/projects.module';

import AuthModule from './auth/auth.module';
import UsersModule from './users/users.module';

const routes: Routes = [
  {
    path: '/v1',
    children: [
      { path: '/auth', module: AuthModule },
      { path: '/users', module: UsersModule },
      { path: '/projects',module: ProjectsModule}
    ],
  },
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    AuthModule,
    UsersModule,
    ProjectsModule,

  ],
})
export default class V1Module {}
