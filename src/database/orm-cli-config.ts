import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1743255967692 } from 'src/migrations/1743255967692-CreateCoursesTable';

export const dataSorce = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCoursesTable1743255967692],
});
