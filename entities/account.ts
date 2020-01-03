import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("account" ,{schema:"enableets" } )
export class account {

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:128,
        name:"account"
        })
    account:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"password"
        })
    password:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"name"
        })
    name:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:32,
        name:"role"
        })
    role:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"sex"
        })
    sex:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"class"
        })
    class:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"number"
        })
    number:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"school"
        })
    school:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"email"
        })
    email:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createdAt"
        })
    createdAt:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"lastOnlineTime"
        })
    lastOnlineTime:Date | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"admissionYear"
        })
    admissionYear:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"numberID"
        })
    numberID:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"origin"
        })
    origin:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"token"
        })
    token:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"qRCode"
        })
    qRCode:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"agent"
        })
    agent:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"address"
        })
    address:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"phone"
        })
    phone:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"disableEndTime"
        })
    disableEndTime:Date | null;
        

    @Column("int",{ 
        nullable:true,
        name:"roleId"
        })
    roleId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"agentId"
        })
    agentId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"schoolId"
        })
    schoolId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"classId"
        })
    classId:number | null;
        
}
