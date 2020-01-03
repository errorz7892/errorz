import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("dailyuserstats" ,{schema:"enableets" } )
@Index("id",["id",],{unique:true})
export class dailyuserstats {

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
        

    @Column("varchar",{ 
        nullable:false,
        length:128,
        name:"account"
        })
    account:string;
        

    @Column("int",{ 
        nullable:true,
        name:"roleId"
        })
    roleId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"schoolId"
        })
    schoolId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"classId"
        })
    classId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"agentId"
        })
    agentId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"registerBookCount"
        })
    registerBookCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"recommendCount"
        })
    recommendCount:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"active"
        })
    active:boolean | null;
        
}
