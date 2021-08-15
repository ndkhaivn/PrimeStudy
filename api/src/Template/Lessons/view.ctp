<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Lesson $lesson
 */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Html->link(__('Edit Lesson'), ['action' => 'edit', $lesson->id]) ?> </li>
        <li><?= $this->Form->postLink(__('Delete Lesson'), ['action' => 'delete', $lesson->id], ['confirm' => __('Are you sure you want to delete # {0}?', $lesson->id)]) ?> </li>
        <li><?= $this->Html->link(__('List Lessons'), ['action' => 'index']) ?> </li>
        <li><?= $this->Html->link(__('New Lesson'), ['action' => 'add']) ?> </li>
        <li><?= $this->Html->link(__('List Subjects'), ['controller' => 'Subjects', 'action' => 'index']) ?> </li>
        <li><?= $this->Html->link(__('New Subject'), ['controller' => 'Subjects', 'action' => 'add']) ?> </li>
        <li><?= $this->Html->link(__('List Study Classes'), ['controller' => 'StudyClasses', 'action' => 'index']) ?> </li>
        <li><?= $this->Html->link(__('New Study Class'), ['controller' => 'StudyClasses', 'action' => 'add']) ?> </li>
        <li><?= $this->Html->link(__('List Studies'), ['controller' => 'Studies', 'action' => 'index']) ?> </li>
        <li><?= $this->Html->link(__('New Study'), ['controller' => 'Studies', 'action' => 'add']) ?> </li>
    </ul>
</nav>
<div class="lessons view large-9 medium-8 columns content">
    <h3><?= h($lesson->title) ?></h3>
    <table class="vertical-table">
        <tr>
            <th scope="row"><?= __('Subject') ?></th>
            <td><?= $lesson->has('subject') ? $this->Html->link($lesson->subject->name, ['controller' => 'Subjects', 'action' => 'view', $lesson->subject->id]) : '' ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Title') ?></th>
            <td><?= h($lesson->title) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Youtube Src') ?></th>
            <td><?= h($lesson->youtube_src) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Study Class') ?></th>
            <td><?= $lesson->has('study_class') ? $this->Html->link($lesson->study_class->title, ['controller' => 'StudyClasses', 'action' => 'view', $lesson->study_class->id]) : '' ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Id') ?></th>
            <td><?= $this->Number->format($lesson->id) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Date') ?></th>
            <td><?= h($lesson->date) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Submission Due') ?></th>
            <td><?= h($lesson->submission_due) ?></td>
        </tr>
    </table>
    <div class="row">
        <h4><?= __('Content') ?></h4>
        <?= $this->Text->autoParagraph(h($lesson->content)); ?>
    </div>
    <div class="row">
        <h4><?= __('Requirements') ?></h4>
        <?= $this->Text->autoParagraph(h($lesson->requirements)); ?>
    </div>
    <div class="related">
        <h4><?= __('Related Studies') ?></h4>
        <?php if (!empty($lesson->studies)): ?>
        <table cellpadding="0" cellspacing="0">
            <tr>
                <th scope="col"><?= __('Id') ?></th>
                <th scope="col"><?= __('Uploads') ?></th>
                <th scope="col"><?= __('Lesson Id') ?></th>
                <th scope="col"><?= __('Student Id') ?></th>
                <th scope="col"><?= __('Checked') ?></th>
                <th scope="col"><?= __('Feedback') ?></th>
                <th scope="col"><?= __('Feedback Text') ?></th>
                <th scope="col"><?= __('Submitted') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
            <?php foreach ($lesson->studies as $studies): ?>
            <tr>
                <td><?= h($studies->id) ?></td>
                <td><?= h($studies->uploads) ?></td>
                <td><?= h($studies->lesson_id) ?></td>
                <td><?= h($studies->student_id) ?></td>
                <td><?= h($studies->checked) ?></td>
                <td><?= h($studies->feedback) ?></td>
                <td><?= h($studies->feedback_text) ?></td>
                <td><?= h($studies->submitted) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['controller' => 'Studies', 'action' => 'view', $studies->id]) ?>
                    <?= $this->Html->link(__('Edit'), ['controller' => 'Studies', 'action' => 'edit', $studies->id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['controller' => 'Studies', 'action' => 'delete', $studies->id], ['confirm' => __('Are you sure you want to delete # {0}?', $studies->id)]) ?>
                </td>
            </tr>
            <?php endforeach; ?>
        </table>
        <?php endif; ?>
    </div>
</div>
