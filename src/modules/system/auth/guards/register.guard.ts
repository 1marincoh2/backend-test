import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import * as passport from 'passport';
import {AuthGuard} from "@nestjs/passport";
@Injectable()
export class RegisterGuard extends AuthGuard('register') {}

//     public async canActivate(context: ExecutionContext): Promise<boolean> {
//         const [
//             req,
//             res,
//             next,
//         ] = [
//             context.switchToHttp().getRequest(),
//             context.switchToHttp().getResponse(),
//             context.switchToHttp().getNext(),
//         ];
//         // departamento ,plantel rol y estatus email, password, name pater materno
//         // return new Promise(resolve => resolve(true));
//         return new Promise((resolve) => {
//             passport.authenticate('local-register', (err, user) => {
//                 if (err || !user) {
//                     return resolve(false);
//                 }
//                 req.logIn(user, (errLogin) => {
//                     if (errLogin) {
//                         return resolve(false);
//                     }
//                     req.session.save((errSessionSave) => {
//                         if (errSessionSave) {
//                             return resolve(false);
//                         }
//                         return resolve(true);
//                     });
//                 });
//             })(req, res, next);
//         });
//     }
// }
