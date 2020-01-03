import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("quizbook" ,{schema:"enableets" } )
export class quizbook {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"ISBN"
        })
    ISBN:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"name"
        })
    name:string | null;
        

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
        

    @Column("varchar",{ 
        nullable:true,
        name:"hyperlink"
        })
    hyperlink:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"contestId"
        })
    contestId:number | null;
        
}
