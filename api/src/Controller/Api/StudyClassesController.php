<?php
namespace App\Controller\Api;

use App\Controller\Api\AppController;
use Cake\I18n\Date;
use Cake\Log\Log;
use DateTime;

/**
 * StudyClasses Controller
 *
 * @property \App\Model\Table\StudyClassesTable $StudyClasses
 * @property \App\Model\Table\StudentsTable $Students
 * @method \App\Model\Entity\StudyClass[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class StudyClassesController extends AppController
{
    public function view($id) {
        $this->loadModel('StudyClasses');
        $this->loadModel('Students');

        $start = new DateTime($this->request->getQuery('start'));
        $end = new DateTime($this->request->getQuery('end'));

        $students = $this->Students->find('all')
            ->where(['study_class_id' => $id])
            ->contain(['Studies.Lessons.Subjects', 'Studies' => [
                'conditions' => ['Studies.submitted >=' => $start, 'Studies.submitted <' => $end]
            ]])->all()->toList();

        $this->set([
            'response' => $students,
            '_serialize' => 'response'
        ]);
    }
}
