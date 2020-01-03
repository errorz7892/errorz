import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("stageuserscore" ,{schema:"enableets" } )
@Index("cid",["cid",])
export class stageuserscore {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"idx"
        })
    idx:number;
        

    @Column("int",{ 
        nullable:true,
        name:"cid"
        })
    cid:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"stageId"
        })
    stageId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"bestRank"
        })
    bestRank:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"bestScore"
        })
    bestScore:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"bestSecond"
        })
    bestSecond:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"bestLogIdx"
        })
    bestLogIdx:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"lastLogIdx"
        })
    lastLogIdx:number | null;
        
}
