import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("rank" ,{schema:"enableets" } )
@Index("id",["id",],{unique:true})
export class rank {

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
        

    @Column("varchar",{ 
        nullable:true,
        name:"account"
        })
    account:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"teamName"
        })
    teamName:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"class"
        })
    class:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"score"
        })
    score:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"round"
        })
    round:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createdAt"
        })
    createdAt:Date | null;
        
}
