import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("errorlog" ,{schema:"enableets" } )
export class errorlog {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"cid"
        })
    cid:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"method"
        })
    method:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"logAt"
        })
    logAt:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"errorMessage"
        })
    errorMessage:string | null;
        
}
