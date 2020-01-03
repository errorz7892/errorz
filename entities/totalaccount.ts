import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("totalaccount" ,{schema:"enableets" } )
export class totalaccount {

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
        name:"classId"
        })
    classId:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"totalCount"
        })
    totalCount:number | null;
        
}
