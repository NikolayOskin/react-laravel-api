<?php

namespace App\Http\Controllers\Api;

use App\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        return $user;
    }

    public function login(Request $request)
    {
        $http = new Client([
            'base_uri' => 'http://127.0.0.1:8000',
            'defaults' => [
                'exceptions' => false
            ]
        ]);
        $response = $http->post('/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => config('auth.proxy.client_id'),
                'client_secret' => config('auth.proxy.client_secret'),
                'username' => $request->email,
                'password' => $request->password,
                'scope' => '',
            ],
        ]);

        return json_decode((string) $response->getBody(), true);
    }
}
