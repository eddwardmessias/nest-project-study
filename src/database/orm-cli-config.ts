import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1743255967692 } from 'src/migrations/1743255967692-CreateCoursesTable';
import { CreateTagsTable1743256934914 } from 'src/migrations/1743256934914-CreateTagsTable';

export const dataSorce = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCoursesTable1743255967692, CreateTagsTable1743256934914],
});
