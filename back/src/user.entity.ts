import { Entity, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
