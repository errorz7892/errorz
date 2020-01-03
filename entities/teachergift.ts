import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("teachergift" ,{schema:"enableets" } )
export class teachergift {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"teacherId"
        })
    teacherId:number;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"normalEggCount"
        })
    normalEggCount:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"nEggUpdateAt"
        })
    nEggUpdateAt:Date | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"specialEggCount"
        })
    specialEggCount:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"sEggUpdateAt"
        })
    sEggUpdateAt:Date | null;
        
}
