import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("beginnermission" ,{schema:"enableets" } )
export class beginnermission {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"cid"
        })
    cid:number;
        

    @Column("int",{ 
        nullable:true,
        name:"missionStep"
        })
    missionStep:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"status"
        })
    status:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:128,
        name:"petTemplate"
        })
    petTemplate:string | null;
        
}
