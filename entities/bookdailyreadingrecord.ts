import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("bookdailyreadingrecord" ,{schema:"enableets" } )
@Index("id",["id",],{unique:true})
export class bookdailyreadingrecord {

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
        

    @Column("int",{ 
        nullable:true,
        name:"dayId"
        })
    dayId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"raedPageCount"
        })
    raedPageCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"cumulateReadPage"
        })
    cumulateReadPage:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"updatedCount"
        })
    updatedCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'1'",
        name:"verifiedState"
        })
    verifiedState:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"verifiedCid"
        })
    verifiedCid:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"verifiedAt"
        })
    verifiedAt:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"updatedAt"
        })
    updatedAt:Date | null;
        
}
