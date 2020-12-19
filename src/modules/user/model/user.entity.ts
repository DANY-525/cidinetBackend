import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  primerApellido: string;

  @Column()
  segundoApellido: string;

  @Column()
  primerNombre: string;

  @Column()
  segundoNombre: string;
  
  @Column()
  numeroIdentificacion: number;

  @Column()
  correo: string;

  @Column()
  fechaIngreso: string;

  @Column()
  estado: number;

  @Column()
  idPais: number;

  @Column()
  tipoId: number;


  @Column()
  identificacion: number;

  @Column()
  idArea: number;

  @Column()
  fechaRegistro: string;
}