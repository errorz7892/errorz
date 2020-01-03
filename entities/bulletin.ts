import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("bulletin" ,{schema:"enableets" } )
export class bulletin {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"type"
        })
    type:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"to"
        })
    to:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"message"
        })
    message:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"editedAt"
        })
    editedAt:Date | null;
        

    @Column("int",{ 
        nullable:true,
        name:"editor"
        })
    editor:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"language"
        })
    language:number | null;
        
}
