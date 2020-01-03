import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("sportdailyrecord" ,{schema:"enableets" } )
@Index("sportTag",["sportTag",])
@Index("dayId",["dayId",])
@Index("year",["year",])
@Index("month",["month",])
@Index("verifiedState",["verifiedState",])
export class sportdailyrecord {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"sportTag"
        })
    sportTag:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"dayId"
        })
    dayId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"year"
        })
    year:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"month"
        })
    month:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"cid"
        })
    cid:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"count"
        })
    count:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"updateAt"
        })
    updateAt:Date | null;
        

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
        
}
