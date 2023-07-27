<?php

use App\Http\Controllers\LoginController;
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
Route::get('/login',[LoginController::class, 'Login'])->name('Login');
Route::post('/login', [LoginController::class, 'authenticate'])->name('auth');
Route::post('/sair', [LoginController::class, 'logout'])->name('logout');
Route::get('/', [TarefasController::class, 'index'])->name('Home')->middleware('auth');

route::post('/', [TarefasController::class , 'store'])->middleware('auth');

Route::post('/create-aba', [TarefasController::class, 'createAba'])->middleware('auth');
Route::get('/completar-task/{id}', [TarefasController::class, 'completarTask'])->middleware('auth');
Route::get('/excluir-task/{id}', [TarefasController::class, 'delete'])->middleware('auth');
Route::get('/refazer-task/{id}', [TarefasController::class, 'refazer'])->middleware('auth');
Route::get('/remover-aba/{id}', [TarefasController::class, 'deleteAba'])->middleware('auth');
