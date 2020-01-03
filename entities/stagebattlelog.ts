import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("stagebattlelog" ,{schema:"enableets" } )
@Index("cid",["cid",])
@Index("classId",["classId",])
@Index("dayId",["dayId",])
export class stagebattlelog {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"battleId"
        })
    battleId:number;
        

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
        name:"stageId"
        })
    stageId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"type"
        })
    type:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"brokeCount"
        })
    brokeCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"rank"
        })
    rank:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"score"
        })
    score:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"usedTime"
        })
    usedTime:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"passedMission"
        })
    passedMission:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"detail"
        })
    detail:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"dropItems"
        })
    dropItems:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"rewardItems"
        })
    rewardItems:string | null;
        

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
