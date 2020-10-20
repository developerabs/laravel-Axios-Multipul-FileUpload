@extends('layouts.app')
@section('title','Laravel axios Multipul file upload')

@section('content')

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>Laravel axios Multipul file upload</h4>
                </div>
                <div class="card-body">
                    <button class="fileAddBtn btn btn-primary my-3 atn-sm">Add File</button>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>File</th>
                                <th>File Size</th>
                                <th>Cancel</th>
                                <th>Upload</th>
                                <td>Uploaded(MB)</td>
                                <td>Uploaded(%)</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody class="fileList">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection