<?php

namespace Flagrow\Subscribed\Blueprints;

use Flarum\Core\Notification\BlueprintInterface;
use Flarum\Core\Notification\MailableInterface;
use Flarum\Core\User;

class UserCreatedBlueprint implements BlueprintInterface, MailableInterface
{
    /**
     * @var User
     */
    public $user;

    /**
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * {@inheritdoc}
     */
    public function getSender()
    {
        return $this->user;
    }

    /**
     * {@inheritdoc}
     */
    public function getSubject()
    {
        return $this->user;
    }

    /**
     * {@inheritdoc}
     */
    public function getData()
    {
    }

    /**
     * {@inheritdoc}
     */
    public static function getType()
    {
        return 'userCreated';
    }

    /**
     * {@inheritdoc}
     */
    public static function getSubjectModel()
    {
        return User::class;
    }

    /**
     * Get the name of the view to construct a notification email with.
     *
     * @return string
     */
    public function getEmailView()
    {
        return ['text' => 'flagrow-subscribed::emails.userCreated'];
    }

    /**
     * Get the subject line for a notification email.
     *
     * @return string
     */
    public function getEmailSubject()
    {
        return $this->user->username;
    }
}
