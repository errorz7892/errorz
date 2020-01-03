import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("personalimage" ,{schema:"enableets" } )
export class personalimage {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"ownerId"
        })
    ownerId:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"tag"
        })
    tag:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"url"
        })
    url:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"updateAt"
        })
    updateAt:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createAt"
        })
    createAt:Date | null;
        
}
