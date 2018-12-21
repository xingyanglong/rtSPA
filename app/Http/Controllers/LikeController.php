<?php

namespace App\Http\Controllers;

use App\Model\Like;
use Illuminate\Http\Request;
use App\Model\Reply;

class LikeController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('JWT', ['except' => ['index','show']]);
    }
    public function likeIt(Reply $reply) 
    {
        $reply->like()->create([
            'user_id' => '1'
        ]);
    }

    public function unlikeIt(Reply $reply)
    {
        $reply->like()->where('user_id','1')->first()->delete();
    }
}
