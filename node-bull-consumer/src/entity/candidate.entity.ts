import { Entity, PrimaryColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Vote } from './vote.entity';

@Entity()
export class Candidate {
  @PrimaryColumn()
  partyNumber: number;

  @Column()
  name: string;

  @Column({ default: 'https://cdn-icons-png.flaticon.com/512/147/147142.png' })
  photo: string;

  @OneToMany(() => Vote, (vote) => vote.partyNumber, { cascade: true })
  @JoinColumn({ name: 'partyNumber' })
  votes: Vote[];
}
