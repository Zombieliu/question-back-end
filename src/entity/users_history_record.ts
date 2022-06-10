import { EntityModel } from '@midwayjs/orm';
import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@EntityModel()
export class Users_history_record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  season: string;

  @Column()
  email: string;

  @Column()
  near_address: string;

  @Column()
  content: string;

  @Column()
  content_index: number;

  @Column()
  correct_number: number;

  @Column()
  all_questions: number;
  
  @CreateDateColumn()
  create?: number;

  @UpdateDateColumn()
  update?: number;

}
