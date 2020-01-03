import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("serverinformation" ,{schema:"enableets" } )
export class serverinformation {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"address"
        })
    address:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        name:"version"
        })
    version:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"packageName"
        })
    packageName:string;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"state"
        })
    state:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'unknown'",
        name:"description"
        })
    description:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"reason"
        })
    reason:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"reasonKey"
        })
    reasonKey:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"bootAt"
        })
    bootAt:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"nextRebootAt"
        })
    nextRebootAt:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"shutdownAt"
        })
    shutdownAt:Date | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'1'",
        name:"loginMode"
        })
    loginMode:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'["android","iphoneplayer","windowsplayer"]'",
        name:"platform"
        })
    platform:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"isMaster"
        })
    isMaster:number | null;
        
}
