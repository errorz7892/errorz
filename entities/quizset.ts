import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("quizset" ,{schema:"enableets" } )
export class quizset {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"uid"
        })
    uid:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"author"
        })
    author:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"quizName"
        })
    quizName:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"checkStatus"
        })
    checkStatus:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"price"
        })
    price:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"quizNumber"
        })
    quizNumber:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"isActive"
        })
    isActive:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createdAt"
        })
    createdAt:Date | null;
        
}
