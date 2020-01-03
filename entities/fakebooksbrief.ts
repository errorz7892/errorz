import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("fakebooksbrief" ,{schema:"enableets" } )
export class fakebooksbrief {

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:16,
        name:"isbnInfo"
        })
    isbnInfo:string;
        

    @Column("text",{ 
        nullable:true,
        name:"bookBrief"
        })
    bookBrief:string | null;
        
}
