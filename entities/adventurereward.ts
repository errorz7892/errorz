import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("adventurereward" ,{schema:"enableets" } )
export class adventurereward {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"templateID"
        })
    templateID:number;
        

    @Column("int",{ 
        nullable:false,
        name:"adventureTime"
        })
    adventureTime:number;
        

    @Column("int",{ 
        nullable:false,
        name:"experience"
        })
    experience:number;
        

    @Column("int",{ 
        nullable:false,
        name:"gem"
        })
    gem:number;
        

    @Column("int",{ 
        nullable:false,
        name:"specialEgg1"
        })
    specialEgg1:number;
        

    @Column("int",{ 
        nullable:false,
        name:"specialEgg2"
        })
    specialEgg2:number;
        

    @Column("int",{ 
        nullable:false,
        name:"specialEgg3"
        })
    specialEgg3:number;
        

    @Column("int",{ 
        nullable:false,
        name:"appleProb"
        })
    appleProb:number;
        

    @Column("int",{ 
        nullable:false,
        name:"potatoProb"
        })
    potatoProb:number;
        

    @Column("int",{ 
        nullable:false,
        name:"milkProb"
        })
    milkProb:number;
        

    @Column("int",{ 
        nullable:false,
        name:"broccoliProb"
        })
    broccoliProb:number;
        

    @Column("int",{ 
        nullable:false,
        name:"meatProb"
        })
    meatProb:number;
        
}
