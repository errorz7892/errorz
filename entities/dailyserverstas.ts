import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("dailyserverstas" ,{schema:"enableets" } )
export class dailyserverstas {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("bigint",{ 
        nullable:true,
        name:"dateId"
        })
    dateId:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"totalRegisterBookCount"
        })
    totalRegisterBookCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"totalRecommendBookCount"
        })
    totalRecommendBookCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"totalActiveUserCount"
        })
    totalActiveUserCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"todayCreateUserCount"
        })
    todayCreateUserCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"totalUserCount"
        })
    totalUserCount:number | null;
        
}
