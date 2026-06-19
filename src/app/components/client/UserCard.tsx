'use client'

import { useEffect, useState } from 'react'
import './UserCard.scss'
import useUserSettings from "@/app/components/client/hooks/useUserSettings";

export interface User {
    userId: number
    name: string
    email: string
}

interface UserCardProps {
    user: User
}

export default function UserCard({ user }: UserCardProps) {
  const [cardUser, setCardUser] = useState(user) // can just pass the user to be set as default immediately unless business requirements expects otherwise
  const { settings, setSettings, lastNotificationCount } = useUserSettings()

  useEffect(() => {
    setCardUser(user)
  }, [cardUser, user])

  const toggleNotification = (index: number) => {
    settings.notifications[index] = !settings.notifications[index]
    setSettings({
      ...settings,
      notifications: settings.notifications
    })
  }

  return (
    <div className="user-card">
      <h2>User Profile</h2>
      {/*  if we are to follow same practice, why not user-name class here? */}
      <p className="user-info">{user.name}</p>
      <p className="user-email">{user.email}</p>
      <div className="notification-settings">
        <p>Active Notifications: {lastNotificationCount}</p>
        {settings.notifications.map((enabled, index) => (
          <button
            type="button"
            key={index}
            onClick={() => toggleNotification(index)}
            className={enabled ? 'active' : ''}
          >
            Notification {index + 1}: {enabled ? 'On' : 'Off'}
          </button>
        ))}
      </div>
    </div>
  )
}