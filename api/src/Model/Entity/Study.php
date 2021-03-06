<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Study Entity
 *
 * @property int $id
 * @property string|null $uploads
 * @property int $lesson_id
 * @property int $student_id
 * @property bool $checked
 * @property \Cake\I18n\FrozenTime $submitted
 * @property string|null $feedback
 * @property string|null $feedback_text
 *
 * @property \App\Model\Entity\Lesson $lesson
 * @property \App\Model\Entity\Student $student
 */
class Study extends Entity
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
        'uploads' => true,
        'lesson_id' => true,
        'student_id' => true,
        'checked' => true,
        'submitted' => true,
        'feedback' => true,
        'feedback_text' => true,
        'lesson' => true,
        'student' => true,
    ];
}
