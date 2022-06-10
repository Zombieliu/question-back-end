import { EntityModel } from '@midwayjs/orm';
import {
  Column,
  PrimaryGeneratedColumn,
  VersionColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@EntityModel()
export class near_content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  season: string;

  @Column()
  content_index: number;

  @Column()
  content_img: string;

  @Column()
  content_url: string;

  @Column()
  content: string;

  @CreateDateColumn()
  create?: number;

  @UpdateDateColumn()
  update?: number;

  @VersionColumn()
  version?: number;
}
