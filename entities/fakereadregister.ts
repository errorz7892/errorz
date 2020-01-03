import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("fakereadregister" ,{schema:"enableets" } )
export class fakereadregister {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"userID"
        })
    userID:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"isbn"
        })
    isbn:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"borrowedDate"
        })
    borrowedDate:Date | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"opinion"
        })
    opinion:string | null;
        
}
