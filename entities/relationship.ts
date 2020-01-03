import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("relationship" ,{schema:"enableets" } )
@Index("myfriend",["uid",])
export class relationship {

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:32,
        name:"key"
        })
    key:string;
        

    @Column("int",{ 
        nullable:true,
        name:"uid"
        })
    uid:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"fid"
        })
    fid:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:32,
        name:"type"
        })
    type:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"notifiedAt"
        })
    notifiedAt:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createdAt"
        })
    createdAt:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"confirmedAt"
        })
    confirmedAt:Date | null;
        
}
