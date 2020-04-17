<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\StudyClassesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\StudyClassesTable Test Case
 */
class StudyClassesTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\StudyClassesTable
     */
    public $StudyClasses;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.StudyClasses',
        'app.Lessons',
        'app.Students',
        'app.Teachers',
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::getTableLocator()->exists('StudyClasses') ? [] : ['className' => StudyClassesTable::class];
        $this->StudyClasses = TableRegistry::getTableLocator()->get('StudyClasses', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->StudyClasses);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
