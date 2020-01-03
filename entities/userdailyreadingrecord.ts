import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("userdailyreadingrecord" ,{schema:"enableets" } )
@Index("id",["id",],{unique:true})
export class userdailyreadingrecord {

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
        name:"day"
        })
    day:number | null;
        

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
