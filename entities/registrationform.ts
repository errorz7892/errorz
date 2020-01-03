import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("registrationform" ,{schema:"enableets" } )
@Index("id",["id",],{unique:true})
export class registrationform {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"account"
        })
    account:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"uid"
        })
    uid:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"teamName"
        })
    teamName:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"memberName"
        })
    memberName:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"email"
        })
    email:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"class"
        })
    class:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"images"
        })
    images:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"contestId"
        })
    contestId:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"status"
        })
    status:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createdAt"
        })
    createdAt:Date | null;
        
}
