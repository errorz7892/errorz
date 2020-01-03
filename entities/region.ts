import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("region" ,{schema:"enableets" } )
@Index("regionId",["regionId",])
export class region {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"regionName"
        })
    regionName:string | null;
        

    @Column("int",{ 
        nullable:false,
        name:"regionId"
        })
    regionId:number;
        
}
