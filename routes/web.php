<?php

use App\Http\Controllers\TarefasController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [TarefasController::class, 'index'])->name('Home');

route::post('/', [TarefasController::class , 'store']);

Route::post('/create-aba', [TarefasController::class, 'createAba']);
Route::get('/completar-task/{id}', [TarefasController::class, 'completarTask']);
Route::get('/excluir-task/{id}', [TarefasController::class, 'delete']);
Route::get('/refazer-task/{id}', [TarefasController::class, 'refazer']);
Route::get('/remover-aba/{id}', [TarefasController::class, 'deleteAba']);
