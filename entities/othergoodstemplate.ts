import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("othergoodstemplate" ,{schema:"enableets" } )
export class othergoodstemplate {

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:128,
        name:"templateID"
        })
    templateID:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("int",{ 
        nullable:false,
        name:"price"
        })
    price:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:128,
        name:"description"
        })
    description:string | null;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'1'",
        name:"isShow"
        })
    isShow:number;
        
}
