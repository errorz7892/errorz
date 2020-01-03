import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("contest" ,{schema:"enableets" } )
@Index("id",["id",],{unique:true})
export class contest {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"managerId"
        })
    managerId:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"contestName"
        })
    contestName:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"registrationDateStart"
        })
    registrationDateStart:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"registrationDateEnd"
        })
    registrationDateEnd:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"contestDate"
        })
    contestDate:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"contestInfo"
        })
    contestInfo:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"contestLocation"
        })
    contestLocation:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"contestTag"
        })
    contestTag:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"status"
        })
    status:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"memberMax"
        })
    memberMax:number | null;
        

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
        

    @Column("varchar",{ 
        nullable:true,
        name:"realName"
        })
    realName:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"phone"
        })
    phone:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"school"
        })
    school:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"grade"
        })
    grade:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"studentID"
        })
    studentID:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"competitionSystem"
        })
    competitionSystem:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"uploadQuiz"
        })
    uploadQuiz:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"choseQuiz"
        })
    choseQuiz:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"scoring"
        })
    scoring:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"reward"
        })
    reward:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"cost"
        })
    cost:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"images"
        })
    images:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createdAt"
        })
    createdAt:Date | null;
        
}
