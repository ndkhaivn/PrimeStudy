<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Teacher Entity
 *
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property string $phone_no
 * @property int $user_id
 * @property int $study_class_id
 *
 * @property \App\Model\Entity\User $user
 * @property \App\Model\Entity\StudyClass $study_class
 */
class Teacher extends Entity
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
        'phone_no' => true,
        'user_id' => true,
        'study_class_id' => true,
        'user' => true,
        'study_class' => true,
    ];
}
