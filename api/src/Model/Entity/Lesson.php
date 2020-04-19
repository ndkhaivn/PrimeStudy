<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Lesson Entity
 *
 * @property int $id
 * @property int $subject_id
 * @property string $title
 * @property string|null $youtube_src
 * @property string|null $content
 * @property string|null $requirements
 * @property \Cake\I18n\FrozenDate $date
 * @property \Cake\I18n\FrozenTime|null $submission_due
 * @property int $study_class_id
 *
 * @property \App\Model\Entity\Subject $subject
 * @property \App\Model\Entity\StudyClass $study_class
 * @property \App\Model\Entity\Study[] $studies
 */
class Lesson extends Entity
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
        'subject_id' => true,
        'title' => true,
        'youtube_src' => true,
        'content' => true,
        'requirements' => true,
        'date' => true,
        'submission_due' => true,
        'study_class_id' => true,
        'subject' => true,
        'study_class' => true,
        'studies' => true,
    ];
}
