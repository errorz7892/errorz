import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("useradventure" ,{schema:"enableets" } )
@Index("seatIndex_cid",["seatIndex","cid",],{unique:true})
@Index("cid",["cid",])
export class useradventure {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"seatIndex"
        })
    seatIndex:number | null;
        

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
        name:"templateID"
        })
    templateID:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"finishedAt"
        })
    finishedAt:Date | null;
        
}
