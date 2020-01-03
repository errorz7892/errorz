import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("contestquizbase" ,{schema:"enableets" } )
@Index("contestId_level",["contestId","level",],{unique:true})
@Index("contestId",["contestId",])
export class contestquizbase {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"contestId"
        })
    contestId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"level"
        })
    level:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"quizBaseId"
        })
    quizBaseId:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createAt"
        })
    createAt:Date | null;
        
}
