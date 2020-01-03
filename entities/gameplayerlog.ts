import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("gameplayerlog" ,{schema:"enableets" } )
export class gameplayerlog {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"playerId"
        })
    playerId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"contestId"
        })
    contestId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"gameId"
        })
    gameId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"score"
        })
    score:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"detail"
        })
    detail:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"reward"
        })
    reward:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"logAt"
        })
    logAt:Date | null;
        
}
