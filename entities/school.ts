import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("school" ,{schema:"enableets" } )
@Index("id",["id",])
@Index("dsns",["dsns",])
export class school {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("text",{ 
        nullable:true,
        name:"name"
        })
    name:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"gradeMax"
        })
    gradeMax:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"systemNameId"
        })
    systemNameId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"classNameId"
        })
    classNameId:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"schoolAddress"
        })
    schoolAddress:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"schoolPhone"
        })
    schoolPhone:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'1'",
        name:"agentId"
        })
    agentId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"countyId"
        })
    countyId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"localeId"
        })
    localeId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"status"
        })
    status:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:20,
        name:"dsns"
        })
    dsns:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"dsnsToken"
        })
    dsnsToken:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"originId"
        })
    originId:number | null;
        
}
