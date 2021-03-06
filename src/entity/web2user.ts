import { EntityModel } from '@midwayjs/orm';
import {
  Column,
  PrimaryGeneratedColumn,
  VersionColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@EntityModel()
export class Web2User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  username: string;

  @Column('text')
  description?: string;

  @Column()
  email: string;

  @Column()
  near_address: string;

  @Column()
  coin: number;

  @Column()
  level: number;

  @Column()
  level_progress: number;

  @CreateDateColumn()
  create?: number;

  @UpdateDateColumn()
  update?: number;

  @VersionColumn()
  version?: number;
}
