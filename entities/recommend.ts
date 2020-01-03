import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("recommend" ,{schema:"enableets" } )
@Index("uidAndIsbn",["userID","isbn",],{unique:true})
@Index("userID",["userID",])
@Index("classId",["classId",])
@Index("roleId",["roleId",])
@Index("schoolId",["schoolId",])
@Index("agentId",["agentId",])
export class recommend {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"userID"
        })
    userID:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:13,
        name:"isbn"
        })
    isbn:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"onShelf"
        })
    onShelf:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"editedAt"
        })
    editedAt:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"textContent"
        })
    textContent:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"rankContent"
        })
    rankContent:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"recordContent"
        })
    recordContent:string | null;
        

    @Column("int",{ 
        nullable:false,
        name:"state"
        })
    state:number;
        

    @Column("int",{ 
        nullable:true,
        name:"teacher"
        })
    teacher:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"roleId"
        })
    roleId:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"agentId"
        })
    agentId:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"schoolId"
        })
    schoolId:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"classId"
        })
    classId:number | null;
        
}
