import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/api-response.interface';
export declare class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(ctx: ExecutionContext, next: CallHandler): Observable<Response<T>>;
}
