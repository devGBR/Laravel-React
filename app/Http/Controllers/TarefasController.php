<?php

namespace App\Http\Controllers;

use App\Models\Abas;
use Illuminate\Http\Request;
use App\Models\Tarefas;
use Inertia\Inertia;

class TarefasController extends Controller
{   
    public function index(){
        $tarefas = Tarefas::all();
        $abas = Abas::all();
        return Inertia::render('Home', ['tarefas' => $tarefas, 'abas' => $abas]);
    }
    public function store(Request $request){
        Tarefas::create([
            'aba' => $request->aba,
            'titulo' => $request->titulo,
            'categoria' => $request->categoria,
            'iscompleted' => false,
            'descricao' => $request->descricao,
            'button' => "Completar",
        ]);
        $tarefas = Tarefas::all();
        return to_route('Home');
    }
   
    public function completarTask($id){
        $tarefas = Tarefas::find($id);
        $tarefas->update([
            'iscompleted' => true,
            'button' => 'Refazer'
         ]); 
        return to_route('Home');
    }
    public function delete($id){
        $tarefa = Tarefas::find($id);

        $delete = $tarefa->delete();
        if($delete){
            return to_route('Home');
        }
        
    }

    public function refazer($id){
        $tarefas = Tarefas::find($id);
        $tarefas->update([
            'iscompleted' => false,
             'button' => 'Completar'
        ]); 
        return to_route('Home');
    }

    // ABA

    public function createAba(Request $request){
        Abas::create([
            'titulo' => $request->titulo
        ]);
        return to_route('Home');
    }

    public function deleteAba($id){
        $aba = Abas::find($id);
        $aba->delete();
        return to_route('Home');
    }
}
