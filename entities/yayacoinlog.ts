import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("yayacoinlog" ,{schema:"enableets" } )
@Index("finishBook",["origin","actionTag","year","month","cid",])
export class yayacoinlog {

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
        default: () => "'1'",
        name:"actionTag"
        })
    actionTag:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"count"
        })
    count:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"whoExecute"
        })
    whoExecute:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'1'",
        name:"origin"
        })
    origin:number | null;
        

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
        

    @Column("datetime",{ 
        nullable:true,
        name:"updatedAt"
        })
    updatedAt:Date | null;
        
}
