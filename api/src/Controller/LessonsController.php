<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * Lessons Controller
 *
 * @property \App\Model\Table\LessonsTable $Lessons
 *
 * @method \App\Model\Entity\Lesson[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class LessonsController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null
     */
    public function index()
    {
        $this->paginate = [
            'contain' => ['Subjects', 'StudyClasses'],
        ];
        $lessons = $this->paginate($this->Lessons);

        $this->set(compact('lessons'));
    }

    /**
     * View method
     *
     * @param string|null $id Lesson id.
     * @return \Cake\Http\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $lesson = $this->Lessons->get($id, [
            'contain' => ['Subjects', 'StudyClasses', 'Studies'],
        ]);

        $this->set('lesson', $lesson);
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $lesson = $this->Lessons->newEntity();
        if ($this->request->is('post')) {
            $lesson = $this->Lessons->patchEntity($lesson, $this->request->getData());
            if ($this->Lessons->save($lesson)) {
                $this->Flash->success(__('The lesson has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The lesson could not be saved. Please, try again.'));
        }
        $subjects = $this->Lessons->Subjects->find('list', ['limit' => 200]);
        $studyClasses = $this->Lessons->StudyClasses->find('list', ['limit' => 200]);
        $this->set(compact('lesson', 'subjects', 'studyClasses'));
    }

    /**
     * Edit method
     *
     * @param string|null $id Lesson id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $lesson = $this->Lessons->get($id, [
            'contain' => [],
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $lesson = $this->Lessons->patchEntity($lesson, $this->request->getData());
            if ($this->Lessons->save($lesson)) {
                $this->Flash->success(__('The lesson has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The lesson could not be saved. Please, try again.'));
        }
        $subjects = $this->Lessons->Subjects->find('list', ['limit' => 200]);
        $studyClasses = $this->Lessons->StudyClasses->find('list', ['limit' => 200]);
        $this->set(compact('lesson', 'subjects', 'studyClasses'));
    }

    /**
     * Delete method
     *
     * @param string|null $id Lesson id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $lesson = $this->Lessons->get($id);
        if ($this->Lessons->delete($lesson)) {
            $this->Flash->success(__('The lesson has been deleted.'));
        } else {
            $this->Flash->error(__('The lesson could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
