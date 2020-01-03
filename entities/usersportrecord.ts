import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("usersportrecord" ,{schema:"enableets" } )
@Index("sportTag",["sportTag",])
@Index("classId",["classId",])
@Index("cid",["cid",])
export class usersportrecord {

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
        name:"classId"
        })
    classId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"cid"
        })
    cid:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"parameter"
        })
    parameter:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"totalCount"
        })
    totalCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"totalDay"
        })
    totalDay:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"unVerifiedCount"
        })
    unVerifiedCount:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"lastDailyAt"
        })
    lastDailyAt:Date | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"lastDailyCount"
        })
    lastDailyCount:number | null;
        
}
