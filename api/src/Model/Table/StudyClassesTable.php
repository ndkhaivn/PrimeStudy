<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * StudyClasses Model
 *
 * @property \App\Model\Table\LessonsTable&\Cake\ORM\Association\HasMany $Lessons
 * @property \App\Model\Table\StudentsTable&\Cake\ORM\Association\HasMany $Students
 * @property \App\Model\Table\TeachersTable&\Cake\ORM\Association\HasMany $Teachers
 *
 * @method \App\Model\Entity\StudyClass get($primaryKey, $options = [])
 * @method \App\Model\Entity\StudyClass newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\StudyClass[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\StudyClass|false save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\StudyClass saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\StudyClass patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\StudyClass[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\StudyClass findOrCreate($search, callable $callback = null, $options = [])
 */
class StudyClassesTable extends Table
{
    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        parent::initialize($config);

        $this->setTable('study_classes');
        $this->setDisplayField('title');
        $this->setPrimaryKey('id');

        $this->hasMany('Lessons', [
            'foreignKey' => 'study_class_id',
        ]);
        $this->hasMany('Students', [
            'foreignKey' => 'study_class_id',
        ]);
        $this->hasMany('Teachers', [
            'foreignKey' => 'study_class_id',
        ]);
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator)
    {
        $validator
            ->integer('id')
            ->allowEmptyString('id', null, 'create');

        $validator
            ->scalar('title')
            ->maxLength('title', 255)
            ->requirePresence('title', 'create')
            ->notEmptyString('title');

        $validator
            ->scalar('password')
            ->maxLength('password', 255)
            ->allowEmptyString('password');

        return $validator;
    }
}
