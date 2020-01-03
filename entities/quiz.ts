import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("quiz" ,{schema:"enableets" } )
export class quiz {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"type"
        })
    type:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"qid"
        })
    qid:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"question"
        })
    question:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"url"
        })
    url:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"answer"
        })
    answer:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"option1"
        })
    option1:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"option2"
        })
    option2:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"option3"
        })
    option3:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"source"
        })
    source:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'-1'",
        name:"round"
        })
    round:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"organizer"
        })
    organizer:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"tag"
        })
    tag:string | null;
        

    @Column("float",{ 
        nullable:true,
        default: () => "'10'",
        precision:12,
        name:"seconds"
        })
    seconds:number | null;
        
}
