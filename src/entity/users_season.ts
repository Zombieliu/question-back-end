import { EntityModel } from '@midwayjs/orm';
import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@EntityModel()
export class Users_season {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  season: string;


  @Column()
  season_url: string;

  @Column()
  email: string;

  @Column()
  near_address: string;

  @Column()
  correct_number: number;

  @Column()
  all_questions: number;

  @CreateDateColumn()
  create?: number;

  @UpdateDateColumn()
  update?: number;

}
