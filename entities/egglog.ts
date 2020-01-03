import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("egglog" ,{schema:"enableets" } )
@Index("classId",["classId",])
@Index("dayId",["dayId",])
export class egglog {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"eid"
        })
    eid:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"cid"
        })
    cid:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"classId"
        })
    classId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"templateID"
        })
    templateID:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"from"
        })
    from:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"action"
        })
    action:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"countChange"
        })
    countChange:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"dayId"
        })
    dayId:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"logAt"
        })
    logAt:Date | null;
        
}
