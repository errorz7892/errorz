import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("petappetitetemplate" ,{schema:"enableets" } )
export class petappetitetemplate {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"templateID"
        })
    templateID:number;
        

    @Column("int",{ 
        nullable:false,
        name:"appetite"
        })
    appetite:number;
        
}
