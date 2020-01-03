import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("contestpkteams" ,{schema:"enableets" } )
@Index("contestId",["contestId",])
@Index("leaderCid",["leaderCid",])
@Index("registerStatus",["registerStatus",])
export class contestpkteams {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"contestId"
        })
    contestId:number;
        

    @Column("int",{ 
        nullable:false,
        name:"leaderCid"
        })
    leaderCid:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"members"
        })
    members:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"teamName"
        })
    teamName:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"email"
        })
    email:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"registerStatus"
        })
    registerStatus:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"detail"
        })
    detail:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createAt"
        })
    createAt:Date | null;
        
}
