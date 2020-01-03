import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("userdailyreadrecord" ,{schema:"enableets" } )
@Index("cid_did",["cid","dayId",])
@Index("cid_st_did",["cid","verifiedState","dayId",])
@Index("dayId",["dayId",])
export class userdailyreadrecord {

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
        name:"totalReadPage"
        })
    totalReadPage:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'1'",
        name:"verifiedState"
        })
    verifiedState:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"totalBookCount"
        })
    totalBookCount:number | null;
        
}
