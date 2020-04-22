<?php
namespace App\Controller\Api;

use App\Controller\Api\AppController;

/**
 * Users Controller
 *
 * @property \App\Model\Table\UsersTable $Users
 * @property \App\Model\Table\StudentsTable $Students
 * @property \App\Model\Table\TeachersTable $Teachers
 *
 * @method \App\Model\Entity\User[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class UsersController extends AppController
{
    public function login() {

        $this->loadModel('Students');
        $this->loadModel('Teachers');

        $id = $this->request->getQuery('id');
        $password = $this->request->getQuery('password');

        if ($password === '4bthdqn') {
            $student = $this->Students->get($id, [
                'contain' => ['StudyClasses']
            ]);

            if (!is_null($student)) {
                $user = [
                    'type' => 'STUDENT',
                    'student' => $student
                ];

                $this->set([
                    'response' => $user,
                    '_serialize' => 'response'
                ]);
            }
        } else if ($password === 'anhphuong123') {
            $teacher = $this->Teachers->get($id);
            if (!is_null($teacher)) {
                $teacher = [
                    'type' => 'TEACHER',
                    'teacher' => $teacher
                ];

                $this->set([
                    'response' => $teacher,
                    '_serialize' => 'response'
                ]);
            }
        } else {
            return $this->response->withStatus(400);
        }
    }
}
