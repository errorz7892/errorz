import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("contestplayerscore" ,{schema:"enableets" } )
@Index("contestId_playerId",["contestId","playerId",],{unique:true})
@Index("contestId",["contestId",])
@Index("playerId",["playerId",])
export class contestplayerscore {

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
        name:"playerId"
        })
    playerId:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"bestScore"
        })
    bestScore:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"totalScore"
        })
    totalScore:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"winCount"
        })
    winCount:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"scoreDetail"
        })
    scoreDetail:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"logAt"
        })
    logAt:Date | null;
        
}
