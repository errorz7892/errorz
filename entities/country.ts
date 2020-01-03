import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {city} from "./city";
import {countrylanguage} from "./countrylanguage";


@Entity("country" ,{schema:"world" } )
export class country {

    @Column("char",{ 
        nullable:false,
        primary:true,
        length:3,
        name:"Code"
        })
    Code:string;
        

    @Column("char",{ 
        nullable:false,
        length:52,
        name:"Name"
        })
    Name:string;
        

    @Column("enum",{ 
        nullable:false,
        default: () => "'Asia'",
        enum:["Asia","Europe","North America","Africa","Oceania","Antarctica","South America"],
        name:"Continent"
        })
    Continent:string;
        

    @Column("char",{ 
        nullable:false,
        length:26,
        name:"Region"
        })
    Region:string;
        

    @Column("float",{ 
        nullable:false,
        default: () => "'0.00'",
        precision:10,
        scale:2,
        name:"SurfaceArea"
        })
    SurfaceArea:number;
        

    @Column("smallint",{ 
        nullable:true,
        name:"IndepYear"
        })
    IndepYear:number | null;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"Population"
        })
    Population:number;
        

    @Column("float",{ 
        nullable:true,
        precision:3,
        scale:1,
        name:"LifeExpectancy"
        })
    LifeExpectancy:number | null;
        

    @Column("float",{ 
        nullable:true,
        precision:10,
        scale:2,
        name:"GNP"
        })
    GNP:number | null;
        

    @Column("float",{ 
        nullable:true,
        precision:10,
        scale:2,
        name:"GNPOld"
        })
    GNPOld:number | null;
        

    @Column("char",{ 
        nullable:false,
        length:45,
        name:"LocalName"
        })
    LocalName:string;
        

    @Column("char",{ 
        nullable:false,
        length:45,
        name:"GovernmentForm"
        })
    GovernmentForm:string;
        

    @Column("char",{ 
        nullable:true,
        length:60,
        name:"HeadOfState"
        })
    HeadOfState:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Capital"
        })
    Capital:number | null;
        

    @Column("char",{ 
        nullable:false,
        length:2,
        name:"Code2"
        })
    Code2:string;
        

   
    @OneToMany(()=>city, (city: city)=>city.countryCode,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    citys:city[];
    

   
    @OneToMany(()=>countrylanguage, (countrylanguage: countrylanguage)=>countrylanguage.countryCode,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    countrylanguages:countrylanguage[];
    
}
