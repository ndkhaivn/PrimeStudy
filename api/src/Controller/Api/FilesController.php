<?php

namespace App\Controller\Api;

use App\Controller\Api\AppController;


class FilesController extends AppController
{
    public function add() {
        $file = $this->request->getData('file');

        $extension = pathinfo($file['name'], PATHINFO_EXTENSION);

        $target_dir = WWW_ROOT.'upload/';
        $target_file = $target_dir . md5(time()) . '.' . $extension;

        move_uploaded_file($file['tmp_name'], $target_file);

        $this->set([
            'response' => $target_file,
            '_serialize' => 'response'
        ]);
    }
}
