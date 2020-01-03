import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("usereggs" ,{schema:"enableets" } )
@Index("cid_templateID",["cid","templateID",],{unique:true})
@Index("cid",["cid",])
export class usereggs {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"eid"
        })
    eid:number;
        

    @Column("int",{ 
        nullable:true,
        name:"cid"
        })
    cid:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"templateID"
        })
    templateID:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"incubatedAt"
        })
    incubatedAt:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"hatchOutAt"
        })
    hatchOutAt:Date | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"count"
        })
    count:number | null;
        
}
