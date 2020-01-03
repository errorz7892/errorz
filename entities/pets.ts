import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("pets" ,{schema:"enableets" } )
@Index("cid",["cid",])
export class pets {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"pid"
        })
    pid:number;
        

    @Column("int",{ 
        nullable:true,
        name:"cid"
        })
    cid:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
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
        

    @Column("varchar",{ 
        nullable:true,
        name:"nickName"
        })
    nickName:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'1'",
        name:"level"
        })
    level:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"exp"
        })
    exp:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"slotIndex"
        })
    slotIndex:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"state"
        })
    state:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"stateDescription"
        })
    stateDescription:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createAt"
        })
    createAt:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"lastUpdateAt"
        })
    lastUpdateAt:Date | null;
        
}
