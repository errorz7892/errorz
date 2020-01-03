import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {country} from "./country";


@Entity("city" ,{schema:"world" } )
@Index("CountryCode",["countryCode",])
export class city {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"ID"
        })
    ID:number;
        

    @Column("char",{ 
        nullable:false,
        length:35,
        name:"Name"
        })
    Name:string;
        

   
    @ManyToOne(()=>country, (country: country)=>country.citys,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'CountryCode'})
    countryCode:country | null;


    @Column("char",{ 
        nullable:false,
        length:20,
        name:"District"
        })
    District:string;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"Population"
        })
    Population:number;
}
