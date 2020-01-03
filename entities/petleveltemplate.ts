import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("petleveltemplate" ,{schema:"enableets" } )
export class petleveltemplate {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"level"
        })
    level:number;
        

    @Column("int",{ 
        nullable:false,
        name:"experience"
        })
    experience:number;
        
}
