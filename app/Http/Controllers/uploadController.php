<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class uploadController extends Controller
{
    public function onUpload(Request $req) {
        $req->file('fileKey')->store('myFile');
    }
}
