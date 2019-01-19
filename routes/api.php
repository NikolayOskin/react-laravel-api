<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/tasks', 'TaskController@index');
    Route::get('/tasks/{id}', 'TaskController@show');
    Route::post('/tasks/store', 'TaskController@store');
    Route::put('/tasks/update', 'TaskController@update');
    Route::delete('/tasks/delete', 'TaskController@delete');
});

Route::post('/register', 'Api\UserController@register');
Route::post('/login', 'Api\UserController@login');
