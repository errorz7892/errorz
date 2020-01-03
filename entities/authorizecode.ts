import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("authorizecode" ,{schema:"enableets" } )
export class authorizecode {

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:128,
        name:"code"
        })
    code:string;
        

    @Column("datetime",{ 
        nullable:true,
        name:"expireDay"
        })
    expireDay:Date | null;
        

    @Column("int",{ 
        nullable:true,
        name:"claimerID"
        })
    claimerID:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:128,
        name:"role"
        })
    role:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:128,
        name:"class"
        })
    class:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:128,
        name:"school"
        })
    school:string | null;
        
}
