import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("eggs" ,{schema:"enableets" } )
@Index("cid",["cid",])
export class eggs {

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
        

    @Column("varchar",{ 
        nullable:true,
        name:"nickName"
        })
    nickName:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"from"
        })
    from:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"gainMethod"
        })
    gainMethod:number | null;
        

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
        

    @Column("datetime",{ 
        nullable:true,
        name:"getAt"
        })
    getAt:Date | null;
        
}
