import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthServiceService } from "../service/auth-service.service";

export class AuthInterceptor implements HttpInterceptor{
    
    constructor(private authService:AuthServiceService ){
        
    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.authService.getToken;
        if (authToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",'Bearer '+authToken)
            });
            return next.handle(cloned);
        }
        return next.handle(req);
    }
}