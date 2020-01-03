import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("reviewbooktopicmessage" ,{schema:"enableets" } )
@Index("host_uid",["host","uid",])
@Index("host",["host",])
export class reviewbooktopicmessage {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"host"
        })
    host:number;
        

    @Column("int",{ 
        nullable:true,
        name:"uid"
        })
    uid:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"message"
        })
    message:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"state"
        })
    state:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"writeAt"
        })
    writeAt:Date | null;
        
}
