import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("petalbum" ,{schema:"enableets" } )
@Index("cid_Pid",["cid","pid",],{unique:true})
@Index("cid_tmptId",["cid","templateID",],{unique:true})
@Index("cid",["cid",])
export class petalbum {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"cid"
        })
    cid:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"pid"
        })
    pid:number | null;
        

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
        name:"logAt"
        })
    logAt:Date | null;
        
}
