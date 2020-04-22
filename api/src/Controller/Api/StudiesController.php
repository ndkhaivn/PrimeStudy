<?php
namespace App\Controller\Api;

use App\Controller\Api\AppController;
use Exception;

/**
 * Studies Controller
 *
 * @property \App\Model\Table\StudiesTable $Studies
 *
 * @method \App\Model\Entity\Study[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class StudiesController extends AppController
{
    public function feedback($id) {

        $this->loadModel('Studies');

        $audio_files = $this->request->getData('files');

        $study = $this->Studies->get($id);
        $study->feedback = json_encode($audio_files);
        $study->checked = true;

        $this->Studies->save($study);

        $this->set([
            'response' => $study,
            '_serialize' => 'response'
        ]);
    }

    public function delete($id) {
        $study = $this->Studies->get($id);
        if ($study->checked) {
            return $this->response->withHeader('Access-Control-Allow-Origin', '*')->withStatus(400);
        } else {
            $this->Studies->delete($study);
            return $this->response->withHeader('Access-Control-Allow-Origin', '*')->withStatus(200);
        }
    }
}
