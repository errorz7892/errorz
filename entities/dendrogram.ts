import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("dendrogram" ,{schema:"enableets" } )
@Index("id",["id",],{unique:true})
export class dendrogram {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

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
        

    @Column("int",{ 
        nullable:true,
        name:"hierarchy"
        })
    hierarchy:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"key"
        })
    key:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"parent"
        })
    parent:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"number"
        })
    number:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"grade"
        })
    grade:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"name"
        })
    name:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"source"
        })
    source:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"TreeDataTable"
        })
    TreeDataTable:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createdAt"
        })
    createdAt:Date | null;
        
}
