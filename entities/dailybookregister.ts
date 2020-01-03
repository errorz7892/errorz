import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("dailybookregister" ,{schema:"enableets" } )
@Index("id",["id",],{unique:true})
@Index("roleId",["roleId",])
@Index("schoolId",["schoolId",])
@Index("classId",["classId",])
@Index("agentId",["agentId",])
export class dailybookregister {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("bigint",{ 
        nullable:true,
        name:"dateId"
        })
    dateId:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:128,
        name:"account"
        })
    account:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"roleId"
        })
    roleId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"schoolId"
        })
    schoolId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"classId"
        })
    classId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"agentId"
        })
    agentId:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"bookIsbn"
        })
    bookIsbn:string | null;
        
}
