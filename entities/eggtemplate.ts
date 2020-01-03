import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("eggtemplate" ,{schema:"enableets" } )
export class eggtemplate {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"templateID"
        })
    templateID:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:128,
        name:"eggName"
        })
    eggName:string;
        

    @Column("int",{ 
        nullable:false,
        name:"attribute"
        })
    attribute:number;
        

    @Column("int",{ 
        nullable:false,
        name:"group"
        })
    group:number;
        

    @Column("int",{ 
        nullable:false,
        name:"level"
        })
    level:number;
        

    @Column("int",{ 
        nullable:false,
        name:"hatchTime"
        })
    hatchTime:number;
        

    @Column("int",{ 
        nullable:false,
        name:"teacherRecommendProb"
        })
    teacherRecommendProb:number;
        

    @Column("int",{ 
        nullable:false,
        name:"teacherRegisterProb"
        })
    teacherRegisterProb:number;
        

    @Column("int",{ 
        nullable:false,
        name:"parentsRecommendProb"
        })
    parentsRecommendProb:number;
        

    @Column("int",{ 
        nullable:false,
        name:"parentsRegisterProb"
        })
    parentsRegisterProb:number;
        

    @Column("int",{ 
        nullable:false,
        name:"studentRecommendProb"
        })
    studentRecommendProb:number;
        

    @Column("int",{ 
        nullable:false,
        name:"studentRegisterProb"
        })
    studentRegisterProb:number;
        
}
