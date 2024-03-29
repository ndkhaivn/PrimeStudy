<?php
namespace App\Controller\api;

use Cake\Controller\Controller;
use Cake\Event\Event;


class AppController extends Controller
{
    use \Crud\Controller\ControllerTrait;

    public $components = [
        'RequestHandler',
        'Crud.Crud' => [
            'actions' => [
                'Crud.Index',
                'Crud.View',
                'Crud.Add',
                'Crud.Edit',
                'Crud.Delete'
            ],
            'listeners' => [
                'CrudJsonApi.JsonApi',
                'CrudJsonApi.Pagination',
                'Crud.ApiQueryLog'
            ]
        ]
    ];
}
