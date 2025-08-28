import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "bienvenida",
        pathMatch: 'full'
    },
    {
        path: "bienvenida",
        loadComponent: () => import("./pages/bienvenida/bienvenida").then((c)=> c.Bienvenida)
    },
    {
        path: "login",
        loadComponent: () => import("./pages/login/login").then((c)=> c.Login )
    },
    {
        path: "registro",
        loadComponent: () => import("./pages/registro/registro").then((c)=> c.Registro )
    },
    {
        path: "error",
        loadComponent: () => import("./pages/error/error").then((c)=> c.Error )
    },
    {
        path: "sobre-mi",
        loadComponent: () => import("./pages/sobre-mi/sobre-mi").then((c)=> c.SobreMi )
    },

    {
        path: "**",
        redirectTo: "error"
    }

];
