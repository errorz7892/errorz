import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("readregister" ,{schema:"enableets" } )
@Index("uidAndIsbn",["userID","isbn",],{unique:true})
@Index("userID",["userID",])
@Index("classId",["classId",])
@Index("roleId",["roleId",])
@Index("schoolId",["schoolId",])
export class readregister {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"userID"
        })
    userID:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:13,
        name:"isbn"
        })
    isbn:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"borrowedDate"
        })
    borrowedDate:Date | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"opinion"
        })
    opinion:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"roleId"
        })
    roleId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"agentId"
        })
    agentId:number | null;
        

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
        default: () => "'0'",
        name:"totalPage"
        })
    totalPage:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"currentPage"
        })
    currentPage:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"unconfirmedCumulatedPage"
        })
    unconfirmedCumulatedPage:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'1'",
        name:"finishState"
        })
    finishState:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"lastRecordIDOfUpdateDailyRead"
        })
    lastRecordIDOfUpdateDailyRead:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        default: () => "'1970-01-01 00:00:00'",
        name:"lastUpdatedAt"
        })
    lastUpdatedAt:Date | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"lastUnconfirmedPage"
        })
    lastUnconfirmedPage:number | null;
        
}
