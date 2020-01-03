import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("feedtemplate" ,{schema:"enableets" } )
export class feedtemplate {

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:128,
        name:"feedTemplateID"
        })
    feedTemplateID:string;
        

    @Column("int",{ 
        nullable:false,
        name:"experience"
        })
    experience:number;
        

    @Column("int",{ 
        nullable:false,
        name:"probability_1"
        })
    probability_1:number;
        
}
