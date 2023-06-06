import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;
  @IsNotEmpty()
  @IsString()
  public name: string;
  @IsNotEmpty()
  @IsString()
  @Length(3, 20, { message: 'Password has to ba at between 3 and 20 chars' })
  public password: string;
}
