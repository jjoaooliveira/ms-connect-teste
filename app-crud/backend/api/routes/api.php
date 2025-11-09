<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

/**
* API Routes for User CRUD operations
*/

Route::get('users', [UserController::class, 'index']);
Route::get('users/{id}', [UserController::class, 'show'])->whereNumber('id');
Route::post('users', [UserController::class, 'store']);
Route::put('users/{id}', [UserController::class, 'update'])->whereNumber('id');
Route::delete('users/{id}', [UserController::class, 'destroy'])->whereNumber('id');
Route::fallback(function () {
    return response()->json([
        "error" => "INVALID PATH",
        "message" => "Invalid Path"
    ], 404);
});
Route::options('{any}', function() {
    return response('', 200);
})->where('any', '.*');
