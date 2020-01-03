import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("contesttreenodes" ,{schema:"enableets" } )
@Index("ct_nd",["contestId","nodeNumber",],{unique:true})
export class contesttreenodes {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"contestId"
        })
    contestId:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"nodeNumber"
        })
    nodeNumber:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"players"
        })
    players:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"gameState"
        })
    gameState:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"winner"
        })
    winner:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"updatedAt"
        })
    updatedAt:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createdAt"
        })
    createdAt:Date | null;
        
}
