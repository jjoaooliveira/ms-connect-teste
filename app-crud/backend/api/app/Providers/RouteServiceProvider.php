<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * Define your route model bindings, pattern filters, etc.
     */
    public function boot(): void
    {
        $this->routes(function () {
            // Se você não quer rotas web, pode comentar a linha abaixo
            // Route::middleware('web')->group(base_path('routes/web.php'));

            Route::prefix('api')
                 ->middleware('api')
                 ->group(base_path('routes/api.php'));
        });
    }
}
