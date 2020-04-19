<?php
namespace App\Controller\Api;

use App\Controller\Api\AppController;

/**
 * Students Controller
 *
 * @property \App\Model\Table\StudentsTable $Students
 *
 * @method \App\Model\Entity\Student[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class StudentsController extends AppController
{
    public function login() {

        $this->loadModel('Students');

        $id = $this->request->getQuery('id');
        $password = $this->request->getQuery('password');

        $student = $this->Students->get($id, [
            'contain' => ['StudyClasses']
        ]);

        $student->type = "STUDENT";

        if (!is_null($student) && $password === '4bthdqn') {
            $this->set([
                'response' => $student,
                '_serialize' => 'response'
            ]);
        } else {
            return $this->response->withStatus(400);
        }
    }
}
