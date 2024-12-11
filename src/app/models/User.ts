import bcrypt from 'bcryptjs';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('usuarios')
class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  nome_completo!: string;

  @Column({ type: 'enum', enum: ['MASCULINO', 'FEMININO'] })
  sexo!: 'MASCULINO' | 'FEMININO';

  @Column({ length: 14, unique: true })
  cpf!: string;

  @Column({ length: 15 })
  celular!: string;

  @Column({ type: 'date' })
  data_nascimento!: Date;

  @Column({ length: 255, unique: true })
  email!: string;

  @Column()
  senha!: string;

  @Column({ type: 'enum', enum: ['CLIENTE', 'ADMIN'], default: 'CLIENTE' })
  tipo!: 'CLIENTE' | 'ADMIN';

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at!: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hasPassword() {
    this.senha = bcrypt.hashSync(this.senha, 8);
  }
}

export default User;
