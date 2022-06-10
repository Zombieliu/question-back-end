import { EntityModel } from '@midwayjs/orm';
import {
  Column,
  VersionColumn,
  CreateDateColumn,
  UpdateDateColumn, PrimaryColumn,
} from 'typeorm';

@EntityModel()
export class Article {

  @PrimaryColumn()
  near_address: string;

  @Column()
  publicKey: string;

  @Column()
  secretKey: string;

  @CreateDateColumn()
  create?: number;

  @UpdateDateColumn()
  update?: number;

  @VersionColumn()
  version?: number;
}
