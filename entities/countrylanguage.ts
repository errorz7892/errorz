import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {country} from "./country";


@Entity("countrylanguage" ,{schema:"world" } )
@Index("CountryCode",["countryCode",])
export class countrylanguage {

   
    @ManyToOne(()=>country, (country: country)=>country.countrylanguages,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'CountryCode'})
    countryCode:country | null;


    @Column("char",{ 
        nullable:false,
        primary:true,
        length:30,
        name:"Language"
        })
    Language:string;
        

    @Column("enum",{ 
        nullable:false,
        default: () => "'F'",
        enum:["T","F"],
        name:"IsOfficial"
        })
    IsOfficial:string;
        

    @Column("float",{ 
        nullable:false,
        default: () => "'0.0'",
        precision:4,
        scale:1,
        name:"Percentage"
        })
    Percentage:number;
        
}
