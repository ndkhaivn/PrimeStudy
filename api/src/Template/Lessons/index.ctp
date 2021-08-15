<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Lesson[]|\Cake\Collection\CollectionInterface $lessons
 */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Html->link(__('New Lesson'), ['action' => 'add']) ?></li>
        <li><?= $this->Html->link(__('List Subjects'), ['controller' => 'Subjects', 'action' => 'index']) ?></li>
        <li><?= $this->Html->link(__('New Subject'), ['controller' => 'Subjects', 'action' => 'add']) ?></li>
        <li><?= $this->Html->link(__('List Study Classes'), ['controller' => 'StudyClasses', 'action' => 'index']) ?></li>
        <li><?= $this->Html->link(__('New Study Class'), ['controller' => 'StudyClasses', 'action' => 'add']) ?></li>
        <li><?= $this->Html->link(__('List Studies'), ['controller' => 'Studies', 'action' => 'index']) ?></li>
        <li><?= $this->Html->link(__('New Study'), ['controller' => 'Studies', 'action' => 'add']) ?></li>
    </ul>
</nav>
<div class="lessons index large-9 medium-8 columns content">
    <h3><?= __('Lessons') ?></h3>
    <table cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <th scope="col"><?= $this->Paginator->sort('id') ?></th>
                <th scope="col"><?= $this->Paginator->sort('subject_id') ?></th>
                <th scope="col"><?= $this->Paginator->sort('title') ?></th>
                <th scope="col"><?= $this->Paginator->sort('youtube_src') ?></th>
                <th scope="col"><?= $this->Paginator->sort('date') ?></th>
                <th scope="col"><?= $this->Paginator->sort('submission_due') ?></th>
                <th scope="col"><?= $this->Paginator->sort('study_class_id') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($lessons as $lesson): ?>
            <tr>
                <td><?= $this->Number->format($lesson->id) ?></td>
                <td><?= $lesson->has('subject') ? $this->Html->link($lesson->subject->name, ['controller' => 'Subjects', 'action' => 'view', $lesson->subject->id]) : '' ?></td>
                <td><?= h($lesson->title) ?></td>
                <td><?= h($lesson->youtube_src) ?></td>
                <td><?= h($lesson->date) ?></td>
                <td><?= h($lesson->submission_due) ?></td>
                <td><?= $lesson->has('study_class') ? $this->Html->link($lesson->study_class->title, ['controller' => 'StudyClasses', 'action' => 'view', $lesson->study_class->id]) : '' ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['action' => 'view', $lesson->id]) ?>
                    <?= $this->Html->link(__('Edit'), ['action' => 'edit', $lesson->id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $lesson->id], ['confirm' => __('Are you sure you want to delete # {0}?', $lesson->id)]) ?>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <div class="paginator">
        <ul class="pagination">
            <?= $this->Paginator->first('<< ' . __('first')) ?>
            <?= $this->Paginator->prev('< ' . __('previous')) ?>
            <?= $this->Paginator->numbers() ?>
            <?= $this->Paginator->next(__('next') . ' >') ?>
            <?= $this->Paginator->last(__('last') . ' >>') ?>
        </ul>
        <p><?= $this->Paginator->counter(['format' => __('Page {{page}} of {{pages}}, showing {{current}} record(s) out of {{count}} total')]) ?></p>
    </div>
</div>
