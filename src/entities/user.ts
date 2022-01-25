import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('varchar', { length: 150 })
  firstName: string;
  @Column('varchar', { length: 150 })
  middleName: string;
  @Column('varchar', { length: 150 })
  lastName: string;
  @Column()
  mobile: string;
  @Column()
  email: string;
  @Column()
  registeredAt: Date;
  @Column()
  lastLogin: Date;
  @Column()
  intro: string;
  @Column()
  profile: string;
}
const myFunction = (input: { isString: boolean }) => {
  let variable = input.isString ? 'Hello' : 123;
  return input;
};
export default User;
