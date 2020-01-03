import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("chatbooktitle" ,{schema:"enableets" } )
@Index("rid",["rid",],{unique:true})
@Index("cid_isbn_tab",["cid","isbn","tab",],{unique:true})
@Index("cid",["cid",])
export class chatbooktitle {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"cid"
        })
    cid:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:13,
        name:"isbn"
        })
    isbn:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"tab"
        })
    tab:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"title"
        })
    title:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"category"
        })
    category:number | null;
        

    @Column("int",{ 
        nullable:false,
        unique: true,
        name:"rid"
        })
    rid:number;
        
}
