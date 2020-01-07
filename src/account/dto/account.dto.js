"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
class AccountDto {
}
__decorate([
    swagger_1.ApiProperty({
        required: true,
        description: 'account',
    }),
    __metadata("design:type", String)
], AccountDto.prototype, "account", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        description: 'password',
    }),
    __metadata("design:type", String)
], AccountDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        description: 'name',
    }),
    __metadata("design:type", String)
], AccountDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        description: 'email',
    }),
    __metadata("design:type", String)
], AccountDto.prototype, "email", void 0);
exports.AccountDto = AccountDto;
class AccountGetDTO {
}
__decorate([
    swagger_1.ApiProperty({
        required: true,
        description: 'account',
    }),
    __metadata("design:type", String)
], AccountGetDTO.prototype, "account", void 0);
exports.AccountGetDTO = AccountGetDTO;
//# sourceMappingURL=account.dto.js.map