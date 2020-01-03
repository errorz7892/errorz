import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("teacherclass" ,{schema:"enableets" } )
@Index("classId",["classId",])
export class teacherclass {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"classId"
        })
    classId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"teacherId"
        })
    teacherId:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createdAt"
        })
    createdAt:Date | null;
        
}
