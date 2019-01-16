<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        $tasks = Task::where('user_id', $request->user()->id)
            ->get(['id', 'title', 'body']);
        return $tasks;
    }

    public function show($id)
    {
        $task = Task::where('id', $id)->get();
        return $task;
    }

    public function store(Request $request)
    {
        $task = Task::create([
            'title' => $request->title,
            'body' => $request->body,
            'user_id' => $request->user()->id
        ]);
        $task = collect($task)->only(['id', 'title', 'body']);
        return $task;
    }

    public function update(Request $request)
    {

    }

    public function delete(Request $request)
    {

    }
}
