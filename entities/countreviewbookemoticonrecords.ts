import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("countreviewbookemoticonrecords" ,{schema:"enableets" } )
@Index("uidAndIsbn",["uid","isbn",],{unique:true})
@Index("uid",["uid",])
export class countreviewbookemoticonrecords {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"uid"
        })
    uid:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:13,
        name:"isbn"
        })
    isbn:string;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"great"
        })
    great:number;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"happy"
        })
    happy:number;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"favorite"
        })
    favorite:number;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"sad"
        })
    sad:number;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"angry"
        })
    angry:number;
        

    @Column("datetime",{ 
        nullable:true,
        name:"updatedAt"
        })
    updatedAt:Date | null;
        
}
