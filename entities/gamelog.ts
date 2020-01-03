import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("gamelog" ,{schema:"enableets" } )
@Index("contestId_hostId",["contestId","hostId",])
export class gamelog {

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
        name:"contestType"
        })
    contestType:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"hostId"
        })
    hostId:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"playerList"
        })
    playerList:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"roomRule"
        })
    roomRule:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"detail"
        })
    detail:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"startAt"
        })
    startAt:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"endAt"
        })
    endAt:Date | null;
        
}
