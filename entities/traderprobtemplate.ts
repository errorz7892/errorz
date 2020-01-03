import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("traderprobtemplate" ,{schema:"enableets" } )
export class traderprobtemplate {

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:128,
        name:"store"
        })
    store:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:128,
        name:"week"
        })
    week:string | null;
        
}
