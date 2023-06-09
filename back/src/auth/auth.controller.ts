import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '@shared/dtos/users/create-users.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signin(
    @Body() dto: Pick<CreateUserDto, 'email' | 'password'>,
    @Req() req,
    @Res() res,
  ) {
    return this.authService.signin(dto, req, res);
  }

  @Post('authenticate')
  authenticate(@Body() dto: { token: string }, @Res() res) {
    return this.authService.authenticate(dto, res);
  }

  @Get('signout')
  signout(@Req() req, @Res() res) {
    return this.authService.signout(req, res);
  }
}
