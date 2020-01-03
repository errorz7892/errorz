import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("userreadingrecord" ,{schema:"enableets" } )
@Index("id",["id",],{unique:true})
export class userreadingrecord {

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
        name:"totalBookCount"
        })
    totalBookCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"lastReadDayId"
        })
    lastReadDayId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"currentContinueReadDay"
        })
    currentContinueReadDay:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"maxContinueReadingDay"
        })
    maxContinueReadingDay:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"totalReadDay"
        })
    totalReadDay:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"totalReadPageCount"
        })
    totalReadPageCount:number | null;
        
}
