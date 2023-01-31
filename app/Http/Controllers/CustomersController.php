<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use log;
use Exception;
use App\Models\Customer;




class CustomersController extends Controller
{
    public function getcustomerlist()
    {
        try
        {
           $customers = customer::orderBy('id', 'ASC')->get();
           return response()->json($customers);
        }
        catch(Exception $e)
        {
            log::error($e);
        }
    }
}
