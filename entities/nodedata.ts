import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("nodedata" ,{schema:"enableets" } )
@Index("id",["id",],{unique:true})
export class nodedata {

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
        name:"treeNumber"
        })
    treeNumber:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"uid"
        })
    uid:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"state"
        })
    state:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"winner"
        })
    winner:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"questionId"
        })
    questionId:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'1'",
        name:"questionNumber"
        })
    questionNumber:number | null;
        
}
