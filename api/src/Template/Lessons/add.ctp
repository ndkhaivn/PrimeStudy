<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Lesson $lesson
 */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Html->link(__('List Lessons'), ['action' => 'index']) ?></li>
        <li><?= $this->Html->link(__('List Subjects'), ['controller' => 'Subjects', 'action' => 'index']) ?></li>
        <li><?= $this->Html->link(__('New Subject'), ['controller' => 'Subjects', 'action' => 'add']) ?></li>
        <li><?= $this->Html->link(__('List Study Classes'), ['controller' => 'StudyClasses', 'action' => 'index']) ?></li>
        <li><?= $this->Html->link(__('New Study Class'), ['controller' => 'StudyClasses', 'action' => 'add']) ?></li>
        <li><?= $this->Html->link(__('List Studies'), ['controller' => 'Studies', 'action' => 'index']) ?></li>
        <li><?= $this->Html->link(__('New Study'), ['controller' => 'Studies', 'action' => 'add']) ?></li>
    </ul>
</nav>
<div class="lessons form large-9 medium-8 columns content">
    <?= $this->Form->create($lesson) ?>
    <fieldset>
        <legend><?= __('Add Lesson') ?></legend>
        <?php
            echo $this->Form->control('subject_id', ['options' => $subjects]);
            echo $this->Form->control('title');
            echo $this->Form->control('youtube_src');
            echo $this->Form->control('content');
            echo $this->Form->control('requirements');
            echo $this->Form->control('date', ['empty' => true]);
            echo $this->Form->control('submission_due', ['empty' => true]);
            echo $this->Form->control('study_class_id', ['options' => $studyClasses]);
        ?>
    </fieldset>
    <?= $this->Form->button(__('Submit')) ?>
    <?= $this->Form->end() ?>
</div>
