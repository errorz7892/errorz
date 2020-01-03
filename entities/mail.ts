import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("mail" ,{schema:"enableets" } )
@Index("myMail",["to",])
export class mail {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"from"
        })
    from:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"to"
        })
    to:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"type"
        })
    type:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"message"
        })
    message:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"attachment"
        })
    attachment:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createdAt"
        })
    createdAt:Date | null;
        
}
