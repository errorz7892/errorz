import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("taskrecordcount" ,{schema:"enableets" } )
@Index("uid_tid",["uid","tid",],{unique:true})
export class taskrecordcount {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"uid"
        })
    uid:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"tid"
        })
    tid:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'10'",
        name:"recordCount"
        })
    recordCount:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"nextUpdateAt"
        })
    nextUpdateAt:Date | null;
        
}
