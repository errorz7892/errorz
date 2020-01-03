import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("quizanswerrecord" ,{schema:"enableets" } )
export class quizanswerrecord {

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
        name:"nodeId"
        })
    nodeId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"questionNumber"
        })
    questionNumber:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"qid"
        })
    qid:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"optionSequence"
        })
    optionSequence:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"optionNumber"
        })
    optionNumber:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"answerNumber"
        })
    answerNumber:number | null;
        

    @Column("float",{ 
        nullable:true,
        precision:12,
        name:"answerTime"
        })
    answerTime:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"isCorrect"
        })
    isCorrect:boolean | null;
        

    @Column("int",{ 
        nullable:true,
        name:"score"
        })
    score:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"resetTimes"
        })
    resetTimes:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"editedAt"
        })
    editedAt:Date | null;
        

    @Column("float",{ 
        nullable:true,
        precision:12,
        name:"questionTime"
        })
    questionTime:number | null;
        
}
