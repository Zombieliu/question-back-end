import { EntityModel } from '@midwayjs/orm';
import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@EntityModel()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  season_type: string;

  @Column()
  task_name: string;

  @Column()
  task_img: string;

  @Column()
  task_content: string;

  @Column()
  task_progress: string;

  @Column()
  task_require: string;

  @Column()
  task_award:number;

  @Column()
  task_complete:boolean;

  @CreateDateColumn()
  create?: number;

  @UpdateDateColumn()
  update?: number;

}
