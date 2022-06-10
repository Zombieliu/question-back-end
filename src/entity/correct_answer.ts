import { EntityModel } from '@midwayjs/orm';
import {
  Column,
  PrimaryGeneratedColumn,
  VersionColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@EntityModel()
export class content_correct_question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  season: string;

  @Column()
  content_index: number;

  @Column()
  content: string;

  @Column()
  question: string;

  @Column()
  correct_answer: string;

  @CreateDateColumn()
  create?: number;

  @UpdateDateColumn()
  update?: number;

  @VersionColumn()
  version?: number;
}
