import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hatchtable" ,{schema:"enableets" } )
export class hatchtable {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"eid"
        })
    eid:number;
        

    @Column("int",{ 
        nullable:false,
        name:"pet"
        })
    pet:number;
        

    @Column("int",{ 
        nullable:false,
        name:"prob"
        })
    prob:number;
        
}
