import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JaegerTracer } from 'jaeger-client';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TracingInterceptor implements NestInterceptor {
  constructor(private readonly tracer: JaegerTracer) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const span = this.tracer.startSpan('request');
    const req = context.switchToHttp().getRequest();

    const traceId = uuidv4();

    req.headers['X-Trace-ID'] = traceId;

    return next.handle().pipe(
      tap(() => {
        span.setTag('http.method', req.method);
        span.setTag('http.url', req.url);
        span.finish();
      })
    );
  }
}

export * from 'jaeger-client';
