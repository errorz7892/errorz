import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("locale" ,{schema:"enableets" } )
@Index("regionId",["regionId",])
@Index("countyId",["countyId",])
@Index("localeId",["localeId",])
export class locale {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"localeName"
        })
    localeName:string | null;
        

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
        

    @Column("int",{ 
        nullable:false,
        name:"localeId"
        })
    localeId:number;
        
}
