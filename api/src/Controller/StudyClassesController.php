<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * StudyClasses Controller
 *
 * @property \App\Model\Table\StudyClassesTable $StudyClasses
 *
 * @method \App\Model\Entity\StudyClass[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class StudyClassesController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null
     */
    public function index()
    {
        $studyClasses = $this->paginate($this->StudyClasses);

        $this->set(compact('studyClasses'));
    }

    /**
     * View method
     *
     * @param string|null $id Study Class id.
     * @return \Cake\Http\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $studyClass = $this->StudyClasses->get($id, [
            'contain' => ['Lessons', 'Students', 'Teachers'],
        ]);

        $this->set('studyClass', $studyClass);
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $studyClass = $this->StudyClasses->newEntity();
        if ($this->request->is('post')) {
            $studyClass = $this->StudyClasses->patchEntity($studyClass, $this->request->getData());
            if ($this->StudyClasses->save($studyClass)) {
                $this->Flash->success(__('The study class has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The study class could not be saved. Please, try again.'));
        }
        $this->set(compact('studyClass'));
    }

    /**
     * Edit method
     *
     * @param string|null $id Study Class id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $studyClass = $this->StudyClasses->get($id, [
            'contain' => [],
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $studyClass = $this->StudyClasses->patchEntity($studyClass, $this->request->getData());
            if ($this->StudyClasses->save($studyClass)) {
                $this->Flash->success(__('The study class has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The study class could not be saved. Please, try again.'));
        }
        $this->set(compact('studyClass'));
    }

    /**
     * Delete method
     *
     * @param string|null $id Study Class id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $studyClass = $this->StudyClasses->get($id);
        if ($this->StudyClasses->delete($studyClass)) {
            $this->Flash->success(__('The study class has been deleted.'));
        } else {
            $this->Flash->error(__('The study class could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
