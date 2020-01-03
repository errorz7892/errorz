import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("contestteamlist" ,{schema:"enableets" } )
@Index("contestId",["contestId",])
export class contestteamlist {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"contestId"
        })
    contestId:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"password"
        })
    password:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"excelName"
        })
    excelName:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        name:"teamIdArray"
        })
    teamIdArray:string;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createAt"
        })
    createAt:Date | null;
        
}
