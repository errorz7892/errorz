import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("dailyclassrecord" ,{schema:"enableets" } )
@Index("dayId",["dayId",])
@Index("classId",["classId",])
@Index("schoolId",["schoolId",])
@Index("agentId",["agentId",])
@Index("roleId",["roleId",])
@Index("regionId",["regionId",])
@Index("countyId",["countyId",])
@Index("localeId",["localeId",])
export class dailyclassrecord {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"dayId"
        })
    dayId:number;
        

    @Column("int",{ 
        nullable:true,
        name:"academicYear"
        })
    academicYear:number | null;
        

    @Column("int",{ 
        nullable:false,
        name:"classId"
        })
    classId:number;
        

    @Column("int",{ 
        nullable:true,
        name:"schoolId"
        })
    schoolId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"agentId"
        })
    agentId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"roleId"
        })
    roleId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"regionId"
        })
    regionId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"countyId"
        })
    countyId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"localeId"
        })
    localeId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"studentCount"
        })
    studentCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"activeCount"
        })
    activeCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"registerBookCount"
        })
    registerBookCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"recommendBookCount"
        })
    recommendBookCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"confirmedBookCount"
        })
    confirmedBookCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"readBookCount"
        })
    readBookCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"readBookPageCount"
        })
    readBookPageCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"virtualPointAddCount"
        })
    virtualPointAddCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"virtualPointSubCount"
        })
    virtualPointSubCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"eggCount"
        })
    eggCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"stageBattleStatus1"
        })
    stageBattleStatus1:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"stageBattleStatus2"
        })
    stageBattleStatus2:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"stageBattleStatus3"
        })
    stageBattleStatus3:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"stageBattleStatus4"
        })
    stageBattleStatus4:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"stageBattleStatus5"
        })
    stageBattleStatus5:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"stageBattleStatus6"
        })
    stageBattleStatus6:number | null;
        
}
