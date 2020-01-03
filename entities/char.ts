import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("char" ,{schema:"enableets" } )
@Index("uid",["uid",],{unique:true})
export class char {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"cid"
        })
    cid:number;
        

    @Column("int",{ 
        nullable:true,
        unique: true,
        name:"uid"
        })
    uid:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"name"
        })
    name:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"sex"
        })
    sex:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"picture"
        })
    picture:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"aboutMyself"
        })
    aboutMyself:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"coin"
        })
    coin:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"popularity"
        })
    popularity:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"battery"
        })
    battery:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"yayaCoin"
        })
    yayaCoin:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"updateAt"
        })
    updateAt:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createdAt"
        })
    createdAt:Date | null;
        

    @Column("int",{ 
        nullable:true,
        name:"classId"
        })
    classId:number | null;
        
}
