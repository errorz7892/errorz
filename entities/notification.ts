import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("notification" ,{schema:"enableets" } )
export class notification {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"cid"
        })
    cid:number;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"popularity"
        })
    popularity:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"mailcount"
        })
    mailcount:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"relation"
        })
    relation:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"yayaCoin"
        })
    yayaCoin:number | null;
        
}
