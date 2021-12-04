import {Controller} from '@nestjs/common';
import {ApiBearerAuth, ApiTags,} from '@nestjs/swagger';

// import {AuthService} from './modules/system/auth/auth.service';

@ApiTags('Authentication')
@ApiBearerAuth()
@Controller()
export class AppController {
    // constructor(private readonly authService: AuthService) {}


}
