<?php
namespace App\Controller\Api;

use App\Controller\Api\AppController;
use DateTime;

/**
 * Lessons Controller
 *
 * @property \App\Model\Table\LessonsTable $Lessons
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
        $startDate = new DateTime($start);
        $endDate = new DateTime($end);

        $lessons = $this->Lessons->find('all')
            ->where([
                'date >' => $startDate,
                'date <' => $endDate,
                'study_class_id' => $class_id
            ]);

        $this->set([
            'response' => $lessons,
            '_serialize' => 'response'
        ]);
    }
}
