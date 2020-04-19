<?php
namespace App\Controller\Api;

use App\Controller\Api\AppController;
use DateTime;

/**
 * Lessons Controller
 *
 * @property \App\Model\Table\LessonsTable $Lessons
 * @property \App\Model\Table\StudiesTable $Studies
 *
 * @method \App\Model\Entity\Lesson[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class LessonsController extends AppController
{

    public function schedule() {
        $this->loadModel('Lessons');

        $start = $this->request->getQuery('start');
        $end = $this->request->getQuery('end');
        $class_id = $this->request->getQuery('class-id');
        $student_id = $this->request->getQuery('student-id');
        $startDate = new DateTime($start);
        $endDate = new DateTime($end);

        $lessons = $this->Lessons->find('all')
            ->where([
                'date >' => $startDate,
                'date <' => $endDate,
                'study_class_id' => $class_id
            ])
            ->contain(['Subjects',
                    'Studies' => [
                        'conditions' => [
                            'Studies.student_id' => $student_id
                        ]
                    ]
                ]);

        $this->set([
            'response' => $lessons,
            '_serialize' => 'response'
        ]);
    }

    public function submit($id) {

        $this->loadModel('Studies');

        $student_id = $this->request->getData('student-id');
        $files = $this->request->getData('files');

        $study = $this->Studies->newEntity();
        $study->lesson_id = $id;
        $study->student_id = $student_id;
        $study->uploads = json_encode($files);

        $this->Studies->save($study);

        $this->set([
            'response' => $study,
            '_serialize' => 'response'
        ]);
    }
}
