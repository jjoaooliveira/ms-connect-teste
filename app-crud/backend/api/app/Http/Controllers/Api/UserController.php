<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserResource;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return UserResource::collection(User::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {
        $savedUser = User::create($request->validated());

        return response()->json([
            'status' => true,
            'message' => "User Created successfully!",
            'product' => $savedUser
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        return User::findOrFail($id)->toResource(UserResource::class);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserUpdateRequest $request, int $id)
    {   
        $validatedUserRequest = $request->validated();
        $user = User::findOrFail($id)->toResource(UserResource::class);
        $user->name = $validatedUserRequest['name'];
        $user->phone = $validatedUserRequest['phone'];
        $user->update();
        
        return response()->json([
            'status' => 'ok',
            'message' => "User update successfully!",
            'user' => $user
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        //
        $user = User::findOrFail($id)->toResource(UserResource::class);
        $user->delete();
        return response()->json([
            'status' => "ok",
            'message' => "User deleted successfully!"
        ], 200);
    }
}
