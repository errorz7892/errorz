import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("userreadrecord" ,{schema:"enableets" } )
export class userreadrecord {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"cid"
        })
    cid:number;
        

    @Column("int",{ 
        nullable:true,
        name:"totalReadBookCount"
        })
    totalReadBookCount:number | null;
        

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
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"unconfirmedTotalCumulatedPage"
        })
    unconfirmedTotalCumulatedPage:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        default: () => "'1970-01-01 00:00:00'",
        name:"lastReadRecordAt"
        })
    lastReadRecordAt:Date | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"lastUnconfirmedTotalPage"
        })
    lastUnconfirmedTotalPage:number | null;
        
}
