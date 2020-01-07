import { ApiProperty } from "@nestjs/swagger"

export class AccountDto {
    @ApiProperty({
        required: true,
        description:'account',
    })
    account: string | undefined

    @ApiProperty({
        required: true,
        description:'password',
    })
    password: string | undefined

    @ApiProperty({
        required: true,
        description:'name',
    })
    name: string | undefined

    @ApiProperty({
        required: true,
        description:'email',
    })
    email: string | undefined
}

export class AccountGetDTO {
    @ApiProperty({
        required: true,
        description: 'account',
    })
    account!: string
}

export class AccountLoginDTO {
    @ApiProperty({
        required: true,
        description: 'account',
    })
    account: string

    @ApiProperty({
        required: true,
        description: 'password',
    })
    password: string
}

