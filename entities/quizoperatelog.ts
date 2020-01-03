import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("quizoperatelog" ,{schema:"enableets" } )
export class quizoperatelog {

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
        name:"type"
        })
    type:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"logAt"
        })
    logAt:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"content"
        })
    content:string | null;
        
}
