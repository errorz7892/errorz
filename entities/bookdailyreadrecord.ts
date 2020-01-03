import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("bookdailyreadrecord" ,{schema:"enableets" } )
@Index("cid_did",["cid","dayId",])
@Index("cid_isbn_did",["cid","isbn","dayId",])
@Index("cid_isbn_st_did",["cid","isbn","verifiedState","dayId",])
@Index("cid_isbn_st",["cid","isbn","verifiedState",])
@Index("cid_did_st",["cid","dayId","verifiedState",])
export class bookdailyreadrecord {

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
        length:13,
        name:"isbn"
        })
    isbn:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"dayId"
        })
    dayId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"readPageCount"
        })
    readPageCount:number | null;
        

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
