<?php

namespace App\Http\Controllers\Api;

use App\Proxy\HttpKernelProxy;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    protected $proxy;

    public function __construct(HttpKernelProxy $proxy)
    {
        $this->proxy = $proxy;
    }

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
        $response = $this->proxy->postJson('oauth/token', [
            'client_id' => config('auth.proxy.client_id'),
            'client_secret' => config('auth.proxy.client_secret'),
            'grant_type' => config('auth.proxy.grant_type'),
            'username' => $request->username,
            'password' => $request->password,
            'scopes' => '[*]'
        ]);

        return $response;

        //return json_decode((string) $response->getBody(), true);
    }

    public function checkToken(Request $request)
    {
        return $request->user() ? response()->json( true ) : response()->json( false );
    }
}
