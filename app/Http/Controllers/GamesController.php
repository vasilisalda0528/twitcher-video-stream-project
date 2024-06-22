<?php

namespace App\Http\Controllers;

use App\Models\Video;
use App\Models\VideoCategories;
use App\Models\Game;
use App\Models\VideoSales;
use App\Notifications\NewVideoSale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\File as FileFacade;
use Illuminate\Http\File;

class GamesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')
                ->except(['']);
    }

    
    
    public function browse() {

      $games = Game::withCount('videos')->latest()->take(40)->orderBy('videos_count', 'desc')->get();

      $exploreImage = asset('images/browse-videos-icon.png');
      
      return Inertia::render('Games/Browse', compact('exploreImage', 'games'));
    }


    
}