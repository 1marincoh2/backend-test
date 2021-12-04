import {Exclude, Expose, Type} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";
import {ApiModelProperty, ApiModelPropertyOptional} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";


export type ClassType<T = any> = new (...args: any[]) => T;

interface IPaginated {
    limit?: number;
    offset?: number;
}

// @ts-ignore
export function PaginationQuery<T extends ClassType>(ResourceCls: T): any {
    class Paginated extends ResourceCls {
    }

    class PaginaNest {
        @ApiModelPropertyOptional({
            type: Paginated,
            isArray: true
        })
        public data: Paginated;

        @ApiModelPropertyOptional()
        count: number;
        @ApiModelPropertyOptional()
        total: number;
        @ApiModelPropertyOptional()
        page: number;
        @ApiModelPropertyOptional()
        pageCount: number
    }

    class Pagina {
        @ApiModelPropertyOptional()
        public statusCode?: number;

        @ApiModelPropertyOptional()
        public message: string;

        @ApiModelPropertyOptional()
        public data: PaginaNest;
    }

    return Pagina;
}
