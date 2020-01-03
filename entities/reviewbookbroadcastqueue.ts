import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("reviewbookbroadcastqueue" ,{schema:"enableets" } )
@Index("uid",["uid",])
export class reviewbookbroadcastqueue {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"uid"
        })
    uid:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"who"
        })
    who:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:13,
        name:"isbn"
        })
    isbn:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"topic"
        })
    topic:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createAt"
        })
    createAt:Date | null;
        
}
