import { ApiProperty } from "@nestjs/swagger"

export class AccountDto {
    @ApiProperty({
        required: true,
        description:'account',
    })
    account: string

    @ApiProperty({
        required: true,
        description:'password',
    })
    password: string

    @ApiProperty({
        required: true,
        description:'name',
    })
    name: string

    @ApiProperty({
        required: true,
        description:'email',
    })
    email: string
}
