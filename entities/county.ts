import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("county" ,{schema:"enableets" } )
@Index("regionId",["regionId",])
@Index("countyId",["countyId",])
export class county {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"countyName"
        })
    countyName:string | null;
        

    @Column("int",{ 
        nullable:false,
        name:"regionId"
        })
    regionId:number;
        

    @Column("int",{ 
        nullable:false,
        name:"countyId"
        })
    countyId:number;
        
}
