<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Student Entity
 *
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property int|null $order_in_class
 * @property \Cake\I18n\FrozenTime|null $created
 * @property int $study_class_id
 *
 * @property \App\Model\Entity\Group $group
 * @property \App\Model\Entity\StudyClass $study_class
 * @property \App\Model\Entity\Study[] $studies
 */
class Student extends Entity
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
        'first_name' => true,
        'last_name' => true,
        'order_in_class' => true,
        'created' => true,
        'study_class_id' => true,
        'group' => true,
        'study_class' => true,
        'studies' => true,
    ];
}
