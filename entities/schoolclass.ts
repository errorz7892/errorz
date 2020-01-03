import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("schoolclass" ,{schema:"enableets" } )
@Index("classId",["classId",])
export class schoolclass {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"index"
        })
    index:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"classId"
        })
    classId:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"academicYear"
        })
    academicYear:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"classroom"
        })
    classroom:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"school"
        })
    school:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"agent"
        })
    agent:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"schoolId"
        })
    schoolId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"agentId"
        })
    agentId:number | null;
        

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
        

    @Column("int",{ 
        nullable:true,
        name:"teacherId"
        })
    teacherId:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"grade"
        })
    grade:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"class"
        })
    class:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"originId"
        })
    originId:number | null;
        
}
