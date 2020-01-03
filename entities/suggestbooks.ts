import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("suggestbooks" ,{schema:"enableets" } )
export class suggestbooks {

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:16,
        name:"sugid"
        })
    sugid:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:13,
        name:"isbn"
        })
    isbn:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"title"
        })
    title:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"author"
        })
    author:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"translator"
        })
    translator:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"summary"
        })
    summary:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"guild"
        })
    guild:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"bookcover"
        })
    bookcover:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"webpage"
        })
    webpage:string | null;
        
}
