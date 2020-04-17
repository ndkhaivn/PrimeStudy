<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * StudyClass Entity
 *
 * @property int $id
 * @property string $title
 * @property string|null $password
 *
 * @property \App\Model\Entity\Lesson[] $lessons
 * @property \App\Model\Entity\Student[] $students
 * @property \App\Model\Entity\Teacher[] $teachers
 */
class StudyClass extends Entity
{
    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        'title' => true,
        'password' => true,
        'lessons' => true,
        'students' => true,
        'teachers' => true,
    ];

    /**
     * Fields that are excluded from JSON versions of the entity.
     *
     * @var array
     */
    protected $_hidden = [
        'password',
    ];
}
