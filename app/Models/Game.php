<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Game extends Model
{
    use HasFactory;

    public $appends = ['slug'];
    public $with = ['category'];

    public function category() {
        return $this->belongsTo(VideoCategories::class);
    }

    public function videos()
    {
        return $this->hasMany(Video::class);
    }

    // slug attribute
     public function getSlugAttribute()
     {
         return Str::slug($this->title);
     }
}