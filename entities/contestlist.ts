import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("contestlist" ,{schema:"enableets" } )
@Index("g6",["public",])
@Index("public",["public",])
@Index("g1",["public",])
@Index("g2",["public",])
@Index("g3",["public",])
@Index("g4",["public",])
@Index("g5",["public",])
@Index("title",["title",])
@Index("g7",["public",])
@Index("g8",["public",])
@Index("g9",["public",])
@Index("g10",["public",])
@Index("g11",["public",])
@Index("g12",["public",])
export class contestlist {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"ownerId"
        })
    ownerId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"type"
        })
    type:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"title"
        })
    title:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"info"
        })
    info:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"images"
        })
    images:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"tags"
        })
    tags:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"centerLocation"
        })
    centerLocation:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"registrationStart"
        })
    registrationStart:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"registrationEnd"
        })
    registrationEnd:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"gameStart"
        })
    gameStart:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"gameEnd"
        })
    gameEnd:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"gameDetail"
        })
    gameDetail:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"rankRule"
        })
    rankRule:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"gameReward"
        })
    gameReward:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"public"
        })
    public:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"release"
        })
    release:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"delete"
        })
    delete:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"appDownloadLink"
        })
    appDownloadLink:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"gradeDescription"
        })
    gradeDescription:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"g1"
        })
    g1:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"g2"
        })
    g2:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"g3"
        })
    g3:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"g4"
        })
    g4:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"g5"
        })
    g5:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"g6"
        })
    g6:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"g7"
        })
    g7:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"g8"
        })
    g8:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"g9"
        })
    g9:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"g10"
        })
    g10:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"g11"
        })
    g11:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"g12"
        })
    g12:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"createAt"
        })
    createAt:Date | null;
        
}
