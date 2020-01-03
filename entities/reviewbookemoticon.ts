import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("reviewbookemoticon" ,{schema:"enableets" } )
@Index("uid_isbn_who",["userID","isbn","who",],{unique:true})
@Index("uidAndIsbn",["userID","isbn",])
@Index("uidAndIsbnAndEmoticon",["userID","isbn","emoticon",])
export class reviewbookemoticon {

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
        name:"emoticon"
        })
    emoticon:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createdAt"
        })
    createdAt:Date | null;
        
}
