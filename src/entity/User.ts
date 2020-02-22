import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";

// here is where we use typeORM to create the database columns
// ObjectType allows us to use the objects in entity as a GraphQL type

@ObjectType()
@Entity("users")
export class User extends BaseEntity{
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column('text')
    email: string;

    @Column('text')
    password: string;
}
