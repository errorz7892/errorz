import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("realobject" ,{schema:"enableets" } )
export class realobject {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"key"
        })
    key:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:128,
        name:"templateID"
        })
    templateID:string;
        

    @Column("int",{ 
        nullable:false,
        name:"cid"
        })
    cid:number;
        
}
