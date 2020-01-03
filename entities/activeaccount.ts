import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("activeaccount" ,{schema:"enableets" } )
export class activeaccount {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("datetime",{ 
        nullable:true,
        name:"date"
        })
    date:Date | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"schoolClassId"
        })
    schoolClassId:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"active"
        })
    active:number | null;
        
}
